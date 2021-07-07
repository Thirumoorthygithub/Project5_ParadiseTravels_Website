import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HomeComponent } from './home/home.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TrackMyBusComponent } from './track-my-bus/track-my-bus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTicketsComponent,
    TrackMyBusComponent,
    ContactUsComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSliderModule,MatFormFieldModule,MatInputModule,MatIconModule,MatDatepickerModule,
    MatNativeDateModule, MatButtonModule, MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
