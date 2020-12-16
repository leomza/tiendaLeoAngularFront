import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logueado: boolean = false;

  constructor(private userServ: UsuariosService, private ruta:Router) { 
    this.userServ.isAuthenticate()
    .subscribe(login=>{
      console.log("Login", login);
      this.logueado=login;
    })
  }
  

  cerrarSesion(){
    var opcion = confirm("Esta por cerrar su sesion, esta seguro?")
    if (opcion === true) {
      this.userServ.logOut();
      this.ruta.navigateByUrl("/home");}
  };

  ngOnInit(): void {
  }

}
