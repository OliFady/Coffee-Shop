import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { CardComponent } from './components/shared/card/card.component';
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
    path: 'details/:id', component: DetailsComponent
  },
  {
    path : 'cart/:price', component:CartComponent
  },
  {
    path : 'cart', component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
