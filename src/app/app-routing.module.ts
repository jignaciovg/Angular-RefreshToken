import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AuthGuard} from '../../src/app/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'perfil',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'',component:HomeComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
