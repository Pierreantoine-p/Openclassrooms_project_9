package com.medilabo.report.service;

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
import org.springframework.stereotype.Service;
import com.medilabo.report.entity.Note;

@Service
public class ReportService {

	private static final Logger logger = LogManager.getLogger(ReportService.class);

	@Autowired
	private List<String> terms;

	public Set<String> readTriggerTerms() {
		Set<String> triggers = new HashSet<>();
		for(String term : terms) {
			triggers.add(term.trim().toLowerCase());
		}
		return triggers;
	}
	

	public int calculatedTrigger(List<Note> notes) throws InterruptedException{
		
		if (notes == null || notes.isEmpty()) {
	        return 1;
	    }
		
		int triggers = 0;
		Set<String> triggerTerms = readTriggerTerms();

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



	private int comparerNoteAvecSymptomes(Note note, Set<String> triggerTerms) {
		int triggerPoint = 0;
		String[] mots = note.getNote().split("\\s+");
		for (String mot : mots) {
			mot = mot.toLowerCase().replace("\"", "");
			if (triggerTerms.contains(mot)) {
				triggerPoint++;
			}
		}
		return triggerPoint;
	}

}