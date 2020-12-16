import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-web',
  templateUrl: './usuario-web.component.html',
  styleUrls: ['./usuario-web.component.css']
})
export class UsuarioWebComponent implements OnInit {

  users;
  descifradoToken: any;

  constructor(private ruta : ActivatedRoute, private usuarioServ: UsuariosService) {
    
    //Uso lo siguiente para decodificar el TOKEN (lo saque de google)
    this.descifradoToken=localStorage.getItem("token");  
    this.descifradoToken=JSON.parse(atob(this.descifradoToken.split('.')[1]));
    this.users = this.descifradoToken;
    console.log(this.users)
  }

  ngOnInit(): void {
  }

}
