import { Component, Input } from '@angular/core';
import { Charts } from '../../../shared/components/charts/charts';
import { attendance } from '../../../core/models/attendance';
import { Datepicker } from "../../../shared/components/datepicker/datepicker";

@Component({
  selector: 'app-attendance',
  imports: [Charts, Datepicker],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {
  @Input() attendanceData!: attendance;
}
