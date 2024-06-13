import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Note } from '../../../models/note.model';
import { Router } from '@angular/router';
import { NoteService } from '../../../service/note.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notes-patient',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './notes-patient.component.html',
  styleUrl: './notes-patient.component.scss'
})
export class NotesPatientComponent implements OnInit{
  notes: Note[] = [];
  userId: number | null = null;

  constructor(private router : Router , private userService: UserService, private noteService: NoteService) {}

  ngOnInit(): void {
    this.userId = this.userService.getUser()?.id ?? null;
        if(this.userId){
      this.noteService.getNotes(this.userId).subscribe(
        (data : Note[]) => {
          this.notes = data;
        },
        (error) => {
          console.error('Error fetching notes:', error);
        }
      )
    }
  }
  redirectToAddNote() {
    this.router.navigate(['/note-patient-add']);
  }

}
