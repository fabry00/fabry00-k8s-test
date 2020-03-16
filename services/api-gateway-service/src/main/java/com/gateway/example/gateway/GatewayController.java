package com.gateway.example.gateway;

import com.gateway.example.config.ApiGatewayProperties;
import com.gateway.example.gateway.utils.ContentRequestTransformer;
import com.gateway.example.gateway.utils.HeadersRequestTransformer;
import com.gateway.example.gateway.utils.URLRequestTransformer;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.util.stream.Collectors;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@Slf4j
public class GatewayController {

    private final ApiGatewayProperties properties;
    private HttpClient httpClient;

    public GatewayController(ApiGatewayProperties properties) {
        this.properties = properties;

        log.info("Endpoints: " + properties.getEndpoints());
    }

    @PostConstruct
    public void init() {
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();

        httpClient = HttpClients.custom()
                .setConnectionManager(cm)
                .build();
    }

    @RequestMapping(value = "/api/**", method = {GET, POST, DELETE})
    @ResponseBody
    public ResponseEntity<String> proxyRequest(HttpServletRequest request) throws IOException, URISyntaxException {
        HttpUriRequest proxiedRequest = createHttpUriRequest(request);
        log.info("request: {}", proxiedRequest);
        HttpResponse proxiedResponse = httpClient.execute(proxiedRequest);
        log.info("Response {}", proxiedResponse.getStatusLine().getStatusCode());
        return new ResponseEntity<>(read(proxiedResponse.getEntity().getContent()), makeResponseHeaders(proxiedResponse), HttpStatus.valueOf(proxiedResponse.getStatusLine().getStatusCode()));
    }

    private HttpHeaders makeResponseHeaders(HttpResponse response) {
        HttpHeaders result = new HttpHeaders();
        Header h = response.getFirstHeader("Content-Type");
        result.set(h.getName(), h.getValue());
        return result;
    }

    private HttpUriRequest createHttpUriRequest(HttpServletRequest request) throws URISyntaxException, IOException {
        URLRequestTransformer urlRequestTransformer = new URLRequestTransformer(properties);
        ContentRequestTransformer contentRequestTransformer = new ContentRequestTransformer();
        HeadersRequestTransformer headersRequestTransformer = new HeadersRequestTransformer();
        headersRequestTransformer.setPredecessor(contentRequestTransformer);
        contentRequestTransformer.setPredecessor(urlRequestTransformer);

        return headersRequestTransformer.transform(request).build();
    }

    private String read(InputStream input) throws IOException {
        try (BufferedReader buffer = new BufferedReader(new InputStreamReader(input))) {
            return buffer.lines().collect(Collectors.joining("\n"));
        }
    }
}
