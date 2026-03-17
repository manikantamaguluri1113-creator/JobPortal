

package com.jobportal.gateway.filter;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class AuthorizationHeaderFilter implements GlobalFilter, Ordered {

    public AuthorizationHeaderFilter() {
        System.out.println("FILTER BEAN CREATED");
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        System.out.println("GATEWAY FILTER EXECUTED");
        System.out.println("REQUEST PATH = " + exchange.getRequest().getPath());

        String authHeader =
                exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

//        if (authHeader != null) {
//            System.out.println("FORWARDING AUTH HEADER");
//            exchange.getRequest().mutate()
//                    .header(HttpHeaders.AUTHORIZATION, authHeader)
//                    .build();
//        } else {
//            System.out.println("NO AUTH HEADER PRESENT");
//        }
//
//        return chain.filter(exchange);
        
        if (authHeader != null) {
            System.out.println("FORWARDING AUTH HEADER");

            ServerWebExchange mutatedExchange = exchange.mutate()
                    .request(
                        exchange.getRequest()
                                .mutate()
                                .header(HttpHeaders.AUTHORIZATION, authHeader)
                                .build()
                    )
                    .build();

            return chain.filter(mutatedExchange);
        } else {
            System.out.println("NO AUTH HEADER PRESENT");
        }
        return chain.filter(exchange);

    }

    @Override
    public int getOrder() {
        return -1;
    }
}

