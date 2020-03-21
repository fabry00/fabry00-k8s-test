//package com.gateway.example.auth;
//
//import com.gateway.example.config.ApiGatewayProperties;
//import lombok.AllArgsConstructor;
//import org.apache.http.HttpResponse;
//import org.apache.http.client.HttpClient;
//import org.apache.http.client.methods.HttpUriRequest;
//import org.apache.http.impl.client.HttpClients;
//import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import javax.annotation.PostConstruct;
//import javax.servlet.http.HttpServletRequest;
//
//@Service
//@AllArgsConstructor
//public class UserService {
//    private final ApiGatewayProperties properties;
//    private HttpClient httpClient;
//
//    @PostConstruct
//    public void init() {
//        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
//        httpClient = HttpClients.custom()
//                .setConnectionManager(cm)
//                .build();
//    }
//
//    public ResponseEntity<?> authUser(HttpServletRequest request) {
//        String url = this.properties.getServices().getUser();
//        HttpUriRequest proxiedRequest = createHttpUriRequest(request);
//        log.info("request: {}", proxiedRequest);
//        HttpResponse proxiedResponse = httpClient.execute(proxiedRequest);
//        log.info("Response {}", proxiedResponse.getStatusLine().getStatusCode());
//        return new ResponseEntity<>(read(proxiedResponse.getEntity().getContent()), makeResponseHeaders(proxiedResponse), HttpStatus.valueOf(proxiedResponse.getStatusLine().getStatusCode()));
//    }
//}
