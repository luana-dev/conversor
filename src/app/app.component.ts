import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "../components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conversor';
}
