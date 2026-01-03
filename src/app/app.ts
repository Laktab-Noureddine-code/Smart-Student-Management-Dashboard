import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
echarts.use([
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  SVGRenderer,
]);

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, NgxEchartsDirective, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [provideEchartsCore({ echarts })],
})
export class App {
  protected readonly title = signal('Student Management');
}
