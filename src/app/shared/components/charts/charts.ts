import { Component, Input } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { attendance } from '../../../core/models/attendance';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts {
  @Input() attendanceData!:attendance
  chartOption: EChartsOption = {
    // 1. Minimal Tooltip (Optional)
    tooltip: {
      trigger: 'item'
    },
    // 2. Hide Legend (So you handle layout in HTML/CSS)
    legend: {
      show: false 
    },
    series: [
      {
        name: 'Attendance',
        type: 'pie',
        // 3. Create the "Donut" hole (Inner Radius, Outer Radius)
        radius: ['60%', '90%'], 
        // 4. Center the chart exactly in the container
        center: ['50%', '50%'], 
        avoidLabelOverlap: false,
        // 5. Hide labels/lines so it fits tight in your container
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        // 6. Your Data with Custom Colors
        data: [
          { 
            value: 80, 
            name: 'Present', 
            itemStyle: { color: '#CFCEFF' } // Purple/Blue
          },
          { 
            value: 20, 
            name: 'Absent', 
            itemStyle: { color: '#FAE27C' } // Yellow
          }
        ]
      }
    ]
  };
}