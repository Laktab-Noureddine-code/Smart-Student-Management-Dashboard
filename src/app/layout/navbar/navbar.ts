import { Component } from '@angular/core';
import { faArrowLeft, faBell, faGear, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-navbar',
  imports: [FaIconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  arrow = faArrowLeft
  search = faMagnifyingGlass
  setting = faGear
  bell = faBell
  user = faUser
}
