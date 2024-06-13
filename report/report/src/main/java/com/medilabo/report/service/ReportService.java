package com.medilabo.report.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.Collectors;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medilabo.report.config.TermsLoader;
import com.medilabo.report.entity.Note;
import com.medilabo.report.entity.Status;
import com.medilabo.report.entity.User;

@Service
public class ReportService {

	private static final Logger logger = LogManager.getLogger(ReportService.class);

	@Autowired
    private List<String> terms;
	
	public int calculatedTrigger(List<Note> notes) throws InterruptedException{
		 int triggers = 0;
		Set<String> triggerTerms = readTriggerTerms();
		
		// fixed threadPool same size as note size
		ExecutorService executor = Executors.newFixedThreadPool(notes.size());


		try { 

			List<Callable<Integer>> tasks = notes.stream()
					.map(note -> (Callable<Integer>) () -> comparerNoteAvecSymptomes(note, triggerTerms))
					.collect(Collectors.toList());
			List<Future<Integer>> futures = executor.invokeAll(tasks);
			for (Future<Integer> future : futures) {
				try {
					triggers += future.get(); 
				} catch (ExecutionException e) {
					e.printStackTrace();
				} catch (InterruptedException e) {

					Thread.currentThread().interrupt(); 
					throw e; 
				}
			}
		} finally {
			executor.shutdown();
		}
		return triggers;
	}

	public Set<String> readTriggerTerms() {
		Set<String> triggers = new HashSet<>();
		for(String term : terms) {
			triggers.add(term.trim().toLowerCase());
		}
		return triggers;
	}

	private int comparerNoteAvecSymptomes(Note note, Set<String> triggerTerms) {

		int triggerPoint = 0;

		String[] mots = note.getNote().split("\\s+");
		for (String mot : mots) {
			mot = mot.toLowerCase().replaceAll("[^a-zA-Z]", "");
			if (triggerTerms.contains(mot)) {
				triggerPoint++;
			}
		}

		return triggerPoint;
	}

}