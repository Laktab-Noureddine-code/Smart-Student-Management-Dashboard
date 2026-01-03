import { Component } from '@angular/core';
import { HelloComponent } from '../../shared/components/hello-component/hello-component';
import { Attendance } from './attendance/attendance';

@Component({
  selector: 'app-dashboard',
  imports: [HelloComponent, Attendance],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  attendanceData = { present: 80, absent: 20 };
}
