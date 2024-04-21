// src/app/app.component.ts

import { Component } from '@angular/core';
import { FooterComponent } from './core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FooterComponent] // Inclua o FooterComponent aqui
})
export class AppComponent {
  title = 'lisa';
}
