import {
  faBookOpenReader,
  faCalendar,
  faChalkboardTeacher,
  faGear,
  faHouse,
  faLandmark,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Component, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { Links } from '../../shared/components/links/links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [FaIconComponent, RouterLink, Links],
})
export class Sidebar {
  routes = signal([
    { title: 'Dashboard', path: '/dashboard', icon: faHouse },
    { title: 'Teachers', path: '/teachers', icon: faChalkboardTeacher },
    { title: 'Students', path: '/students', icon: faUser },
    { title: 'Courses', path: '/courses', icon: faBookOpenReader },
    { title: 'Classes', path: '/classes', icon: faLandmark },
    { title: 'Schedule', path: '/schedule', icon: faCalendar },
    { title: 'Settings', path: '/settings', icon: faGear },
  ]);
  faSignOutAlt = faSignOutAlt;
  logout() {
    alert('Logging out...');
  }
}
