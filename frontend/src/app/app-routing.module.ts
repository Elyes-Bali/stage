import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployersComponent } from './employers/employers.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: DashboardComponent , children: [
    {path: 'card1', component: EmployersComponent}]},
    {path:'signup', component:SignupComponent},
    {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
