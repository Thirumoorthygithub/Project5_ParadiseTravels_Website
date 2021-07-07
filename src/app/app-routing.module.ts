import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TrackMyBusComponent } from './track-my-bus/track-my-bus.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'MyTickets',component:MyTicketsComponent},
  {path:'TrackMyBus',component:TrackMyBusComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Login',component:LoginComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
