import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketFormComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],  
  bootstrap: [AppComponent]
})
export class AppModule { }