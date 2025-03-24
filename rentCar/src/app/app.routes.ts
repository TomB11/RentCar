import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';
import { inject } from '@angular/core';

const canMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router)
    let shouldHaveAccessEmail = localStorage.getItem('email') ? localStorage.getItem('email') : ''
    let rightPassword = localStorage.getItem('pssw') ? localStorage.getItem('pssw') : ''

    if (shouldHaveAccessEmail === 'joe.doe@admin.com' && rightPassword === '000000') {
        return true
    }

    return new RedirectCommand(router.parseUrl('login'))
} 

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canMatch: [canMatch]},
    {path: 'detail/:id', component: DetailViewComponent, canMatch: [canMatch]},
    {path: '**', redirectTo: 'login'},
    {path: '', component: LoginComponent}
];
