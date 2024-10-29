import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';  
interface Ticket {
  id?: number;
  title: string;
  description: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface TicketResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ticket[];
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  private apiUrl = 'http://localhost:8000/test/tickets/';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe  
  ) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.http.get<TicketResponse>(this.apiUrl).subscribe({
      next: (response) => {
        this.tickets = response.results;
        console.log('Tickets loaded:', this.tickets);
      },
      error: (error) => {
        console.error('Error loading tickets:', error);
      }
    });
  }

  onResolveTicket(id: number) {
    this.http.patch(`${this.apiUrl}${id}/resolve/`, {}).subscribe({
      next: () => {
        this.loadTickets();
      },
      error: (error) => {
        console.error('Error resolving ticket:', error);
      }
    });
  }

  onDeleteTicket(id: number) {
    this.http.delete(`${this.apiUrl}${id}/`).subscribe({
      next: () => {
        this.loadTickets();
      },
      error: (error) => {
        console.error('Error deleting ticket:', error);
      }
    });
  }
}