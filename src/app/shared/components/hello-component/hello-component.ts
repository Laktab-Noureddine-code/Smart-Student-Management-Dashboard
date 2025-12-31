import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-hello-component',
  imports: [NgOptimizedImage],
  templateUrl: './hello-component.html',
  styleUrl: './hello-component.css',
})
export class HelloComponent {

}
