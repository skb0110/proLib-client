import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './_helpers';
import { CreateDocComponent } from './create-doc/create-doc.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'landing', component: LandingPageComponent},
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'createdoc', component: CreateDocComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
