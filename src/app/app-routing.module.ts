import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'contact',component:ContactComponent},
  {path:'buy',component:BuyPageComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
