import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
})
export class MainLayout {

}
