import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { LoginWebComponent } from './login-web/login-web.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'login', component: LoginWebComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
