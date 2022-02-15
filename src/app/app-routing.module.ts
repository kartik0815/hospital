import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    component: SignupComponent, path: "signup"
  },
  {
    component: LoginComponent, path: "login"
  },
  {
    component: HomeComponent, path: 'user'
  },
  {
    component: HomeComponent, path: 'user/:id'
  },
  {
    component: UpdateComponent, path: "update/:id"
  },
  {
    component: BookingComponent,path: "book/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
