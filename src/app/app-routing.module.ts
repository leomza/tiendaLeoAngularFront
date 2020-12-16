import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginWebComponent } from './paginas/login-web/login-web.component';
import { ProductoDetalleComponent } from './paginas/producto-detalle/producto-detalle.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { UsuarioWebComponent } from './paginas/usuario-web/usuario-web.component';
import { VentaComponent } from './Paginas/venta/venta.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'login', component: LoginWebComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'usuariosWeb', component: UsuarioWebComponent },
  { path: 'venta', component: VentaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
