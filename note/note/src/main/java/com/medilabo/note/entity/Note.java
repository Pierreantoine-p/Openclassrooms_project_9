package com.medilabo.note.entity;



import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class Note {
	
	private String patid;
	private String patient;
	private String note;
}
