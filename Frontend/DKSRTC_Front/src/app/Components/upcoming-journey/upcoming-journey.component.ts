import { Component, OnInit } from '@angular/core';
import { ITicket } from 'src/app/Interfaces/iticket';
import { TicketViewService } from 'src/app/Services/ticket-view.service';
import { MatInputModule } from '@angular/material/input';
import { UserAddService } from 'src/app/Services/user-add.service';
import { AuthCheckService } from 'src/app/Services/auth-check.service';
import { IUser } from 'src/app/Interfaces/IUser';

@Component({
  selector: 'app-upcoming-journey',
  templateUrl: './upcoming-journey.component.html',
  styleUrls: ['./upcoming-journey.component.sass'],
})
export class UpcomingJourneyComponent implements OnInit {
  tickets!: ITicket[];
  currentUser!: IUser;
  isLoggedIn = false;
  constructor(
    private ticketService: TicketViewService,
    private authService: AuthCheckService
  ) {}
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.ticketService
      .getTickets(this.authService.currentUserSession().userId)
      .subscribe((tickets) => {
        this.tickets = tickets;
        console.log(this.tickets); 
      });
  }
  cancelTicket(passengerId:number) {
    if (this.isLoggedIn) {
      const text = "Do you want to cancel this ticket?";
      if (confirm(text) == true) {
        this.ticketService.TicketCancel(passengerId)
      } else {
      }
    }
    
  }
  
}
