import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';
import { Note } from '../../models/note.model';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-note-patient-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './note-patient-add.component.html',
  styleUrl: './note-patient-add.component.scss'
})
export class NotePatientAddComponent {
  createNoteForm: FormGroup;
  newNote : Note = { patid: '', patient: '', note: '' };
  user : User  | null = null;


  constructor(private fb: FormBuilder, private noteService: NoteService, private router: Router, private userService : UserService) {
    this.createNoteForm = this.fb.group({
      note: ['']
    });
    this.user = this.userService.getUser();
  }
  onSubmit(): void {
    this.newNote.note = this.createNoteForm.value.note;
    this.newNote.patid = this.user?.id.toString()|| '';
    this.newNote.patient = this.user?.firstName|| '';
    this.noteService.addNote(this.newNote).subscribe( {
      next : (result : any) => {
        this.router.navigate(['/detail-patient']);
      }
    })

  }

}
