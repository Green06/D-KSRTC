import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AvailableBusesComponent } from './Components/available-buses/available-buses.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SeatBookingComponent } from './Components/seat-booking/seat-booking.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { PaymentGatewayComponent } from './Components/payment-gateway/payment-gateway.component';
import { UpcomingJourneyComponent } from './Components/upcoming-journey/upcoming-journey.component';
import { HistoryComponent } from './Components/history/history.component';


const routes: Routes = [
  {
    //Hence my default route will be the home component.
    path: '',
    component: HomeComponent,
    title: 'DKSRTC - Your Next Adventure',
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
  {
    path: 'confirm-checkout',
    component: CheckOutComponent,
    title: 'Confirm Booking',
  },
  {
    path: 'book-seats',
    component: SeatBookingComponent,
    title: 'Book Seats',
  },
  {
    path: 'upcoming-journeys',
    component:UpcomingJourneyComponent,
    title: 'Bookings',
  },
  {
    path: 'history',
    component:HistoryComponent,
    title: 'Bookings',
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
    title: 'Not Found',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
  {
    path: 'payment-gateway',
    component: PaymentGatewayComponent,
    title: 'Payment Gateway',
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
