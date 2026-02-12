import { Routes } from '@angular/router';
import { ProfilePage } from './components/profile-page/profile-page';
import { DashboardPage } from './components/dashboard-page/dashboard-page';
import { canActivateAuthRoute } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [canActivateAuthRoute],
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [canActivateAuthRoute],
  },
];
