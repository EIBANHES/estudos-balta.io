import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [

  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: '', component: ProductsPageComponent},
      {path: 'cart', component: CartPageComponent}
      // passa pela frame, e depois renderiza o conteudo de cada outra page
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      {path: 'pets', component: PetsPageComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent},
  // Paginas que nao vao ter o navbar, ele bate no app.component.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
