package com.jobportal.gateway.filter;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Configuration
public class GatewayLoggingFilter implements GlobalFilter{

    @Bean
    public GlobalFilter logRequestFilter() {
        return (exchange, chain) -> {
            String auth = exchange.getRequest()
                    .getHeaders()
                    .getFirst("Authorization");

            System.out.println("GATEWAY → URI = " + exchange.getRequest().getURI());
            System.out.println("GATEWAY → AUTH HEADER = " + (auth != null ? "PRESENT" : "MISSING"));

            return chain.filter(exchange);
        };
    }

	@Override
	public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
		// TODO Auto-generated method stub
		System.out.println("GATEWAY FILTER HIT");
        System.out.println("PATH = " + exchange.getRequest().getURI().getPath());

        return chain.filter(exchange);
	}
}
