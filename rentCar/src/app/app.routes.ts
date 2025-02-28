import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: DetailViewComponent},
    {path: '**', redirectTo: 'login'},
    {path: '', component: LoginComponent}
];
