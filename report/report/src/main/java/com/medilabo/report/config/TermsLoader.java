package com.medilabo.report.config;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class TermsLoader {

	@Bean
	public List<String> terms() throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		Map<String, List<String>> jsonMap = mapper.readValue(Paths.get("src/main/resources/triggerterms.json").toFile(), Map.class);
		return jsonMap.get("terms");
	}
}
