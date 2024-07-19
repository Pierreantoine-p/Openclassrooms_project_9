package com.medilabo.gateway.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
//@EnableWebFluxSecurity
public class CorsConfig implements WebFluxConfigurer {
	
//	@Value("#{'${web.cors.allowed-origins}'.split(',')}")
//    private List<String> allowedOrigins;
//    @Value("#{'${web.cors.allowed-methods}'.split(',')}")
//    private List<String> allowedMethods;
//    @Value("#{'${web.cors.allowed-headers}'.split(',')}")
//    private List<String> allowedHeaders;
//    @Value("#{'${web.cors.exposed-headers}'.split(',')}")
//    private List<String> exposedHeaders;
//    
//	 @Bean
//	    CorsConfigurationSource corsConfigurationSource() {
//	        CorsConfiguration corsConfig = new CorsConfiguration();
//
//	        corsConfig.setAllowedOrigins(allowedOrigins);
//	        corsConfig.setAllowedMethods(allowedMethods);
//	        corsConfig.setAllowedHeaders(allowedHeaders);
//	        corsConfig.setExposedHeaders(exposedHeaders);
//
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", corsConfig);
//
//	        return source;
//	    }
	
	/**
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Collections.singletonList("http://localhost:4200")); // Replace with your allowed origins
		configuration.setAllowedMethods(Collections.singletonList("*")); // Allow all HTTP methods
		configuration.setAllowedHeaders(Collections.singletonList("*")); // Allow all headers
		configuration.setAllowCredentials(true); // Allow credentials (e.g., cookies)

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("http://localhost:4200")
		.allowedMethods("*")
		.allowedHeaders("*")
		.allowCredentials(true);
	}

	**/
}
