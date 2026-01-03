import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.css'],
  standalone: true,
  // 1. Importer les modules nécessaires ici
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  // 2. IMPORTANT : Fournir l'adaptateur de date (sinon erreur !)
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Datepicker {}
