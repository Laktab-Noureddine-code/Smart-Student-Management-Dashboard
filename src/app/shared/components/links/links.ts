import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-links',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './links.html',
  styleUrl: './links.css',
})
export class Links {
  @Input() item: any = {};
}
