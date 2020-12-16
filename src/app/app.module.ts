import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { MenuComponent } from './parte-de-pagina/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginWebComponent } from './paginas/login-web/login-web.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductoDetalleComponent } from './paginas/producto-detalle/producto-detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ProductoComponent } from './parte-de-pagina/producto/producto.component';
import { UsuarioWebComponent } from './paginas/usuario-web/usuario-web.component';
import { TipoOracionPipe } from './Pipes/tipo-oracion.pipe';
import { VentaComponent } from './Paginas/venta/venta.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    MenuComponent,
    LoginWebComponent,
    ProductoDetalleComponent,
    CatalogoComponent,
    ProductoComponent,
    UsuarioWebComponent,
    TipoOracionPipe,
    VentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
