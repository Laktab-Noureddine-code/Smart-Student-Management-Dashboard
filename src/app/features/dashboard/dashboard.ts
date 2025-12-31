import { Component } from "@angular/core";
import { Main } from "../main/main";
import { HelloComponent } from "../../shared/components/hello-component/hello-component";
import { Attendance } from "./attendance/attendance";

@Component({
  selector: 'app-dashboard',
  imports: [Main, HelloComponent, Attendance],
  templateUrl: './dashboard.html',
})
export class Dashboard {


}
