import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/shared/details/details.component'


const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path:'menu' ,
    component: MenuComponent
  },

  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'register', component: RegisterComponent
  },
  {
    path : 'product', component: MenuComponent
  },
  {
    path: 'details', component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
