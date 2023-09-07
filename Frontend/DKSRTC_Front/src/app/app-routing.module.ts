import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AvailableBusesComponent } from './Components/available-buses/available-buses.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {
    //Hence my default route will be the home component.
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'available-buses',
    component: AvailableBusesComponent,
    title: 'Available Buses',
  },
  {
    path: 'user-login',
    component: LoginComponent,
    title: 'Login Page',
  },
  {
    path: 'user-signup',
    component: SignUpComponent,
    title: 'SignUp Page',
  },
  // {path: 'notfound', component: NotFoundComponent},
  // {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
