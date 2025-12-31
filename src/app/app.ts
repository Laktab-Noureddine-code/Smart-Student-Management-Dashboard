import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Dashboard } from './features/dashboard/dashboard';
import { MainLayout } from "./layout/main-layout/main-layout";

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, Dashboard, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Student Management');
}
