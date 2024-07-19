package com.medilabo.report.config;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class TermsLoader {

	@Value("${data}")
	private String dataFilePath;

	@Bean
	public List<String> terms() throws IOException {

		Resource resource = new ClassPathResource(dataFilePath);
		ObjectMapper mapper = new ObjectMapper();
		try (InputStream inputStream = resource.getInputStream()) {
			Map<String, List<String>> jsonMap = mapper.readValue(inputStream, Map.class);
			return jsonMap.get("terms");
		}
	}
}
