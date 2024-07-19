package com.medilabo.gateway.config;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration
@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class GatewayConfig {

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		 return builder.routes()
	                .route("user_route", r -> r
	                        .path("/user/**")
	                        .uri("http://medilabo:8081/user"))

	                .route("user_note", r -> r
	                        .path("/note/**")
	                        .uri("http://note:8082/note"))

	                .route("user_report", r -> r
	                        .path("/report/**")
	                        .uri("http://report:8083/report"))
	                .build();
	}

}
