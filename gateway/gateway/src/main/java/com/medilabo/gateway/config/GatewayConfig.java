package com.medilabo.gateway.config;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsUtils;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Configuration
@SpringBootApplication
public class GatewayConfig {

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("user_route", r->r
						.path("/user/**")
						.uri("http://localhost:7070/user"))
				
				.route("user_note", r->r
						.path("/note/**")
						.uri("http://localhost:6060/note"))
				
				.route("user_report", r->r
						.path("/report/**")
						.uri("http://localhost:5050/report"))		
				 .build();
	}
	
	 @Bean
	    @Order(Ordered.HIGHEST_PRECEDENCE)
	    public GlobalFilter corsFilter() {
	        return (exchange, chain) -> {
	            if (exchange.getRequest().getMethod() == HttpMethod.OPTIONS) {
	                exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
	                exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, PUT, DELETE, OPTIONS");
	                exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "*");
	                exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
	                exchange.getResponse().setStatusCode(HttpStatus.OK);
	                return Mono.empty();
	            } else {
	                return chain.filter(exchange).then(Mono.fromRunnable(() -> {
	                    exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
	                    exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, PUT, DELETE, OPTIONS");
	                    exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "*");
	                    exchange.getResponse().getHeaders().add(HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
	                }));
	            }
	        };
	    }
//	   @Bean
//	    public GlobalFilter corsFilter() {
//	        return (exchange, chain) -> {
//	            ServerHttpRequest request = exchange.getRequest();
//	            if (CorsUtils.isCorsRequest(request)) {
//	                ServerHttpResponse response = exchange.getResponse();
//	                HttpHeaders headers = response.getHeaders();
//	                headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
//	                headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "*");
//	                headers.add(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "GET, PUT, POST, DELETE, OPTIONS");
//	                headers.add(HttpHeaders.ACCESS_CONTROL_MAX_AGE, "3600");
//
//	                if (request.getMethod() == HttpMethod.OPTIONS) {
//	                    response.setStatusCode(HttpStatus.OK);
//	                    return Mono.empty();
//	                }
//	            }
//	            return chain.filter(exchange);
//	        };
//	    }
}
