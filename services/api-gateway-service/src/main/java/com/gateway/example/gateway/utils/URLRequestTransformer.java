package com.gateway.example.gateway.utils;

import com.gateway.example.config.ApiGatewayProperties;
import lombok.AllArgsConstructor;
import org.apache.http.client.methods.RequestBuilder;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.net.URISyntaxException;

@AllArgsConstructor
public class URLRequestTransformer extends ProxyRequestTransformer {

    private final ApiGatewayProperties apiGatewayProperties;

    @Override
    public RequestBuilder transform(HttpServletRequest request) throws URISyntaxException {
        String requestURI = request.getRequestURI();
        URI uri;
        if (request.getQueryString() != null && !request.getQueryString().isEmpty()) {
            uri = new URI(getServiceUrl(requestURI, request) + "?" + request.getQueryString());
        } else {
            uri = new URI(getServiceUrl(requestURI, request));
        }

        RequestBuilder rb = RequestBuilder.create(request.getMethod());
        rb.setUri(uri);
        return rb;
    }

    private String getServiceUrl(String requestURI, HttpServletRequest httpServletRequest) {

        ApiGatewayProperties.Endpoint endpoint =
                apiGatewayProperties.getEndpoints().stream()
                        .filter(e ->
                                requestURI.matches(e.getPath())
                        )
                        .findFirst().orElseThrow(() -> new RuntimeException(httpServletRequest.toString()));
        return endpoint.getLocation() + requestURI;
    }
}
