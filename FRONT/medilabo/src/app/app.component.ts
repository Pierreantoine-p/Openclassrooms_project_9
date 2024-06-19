import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
