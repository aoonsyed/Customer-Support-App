import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  ticket: Ticket = {
    title: '',
    description: '',
    status: 'NEW'
  };
  
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private ticketService: TicketService) {}

  onSubmit(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.ticketService.createTicket(this.ticket).subscribe({
      next: () => {
        this.successMessage = 'Ticket created successfully!';
        // Reset form
        this.ticket = {
          title: '',
          description: '',
          status: 'NEW'
        };
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error creating ticket:', error);
        this.errorMessage = 'Failed to create ticket. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}