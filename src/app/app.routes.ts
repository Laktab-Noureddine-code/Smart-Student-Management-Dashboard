import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { Teachers } from './features/teachers/teachers';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'teachers', component: Teachers },
    ],
  },
];
