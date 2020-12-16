import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioWebLogin } from '../../interfaces/usuarios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-web',
  templateUrl: './login-web.component.html',
  styleUrls: ['./login-web.component.css']
})
export class LoginWebComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder, private userServ: UsuariosService, private ruta : Router) {
    this.myForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    this.userServ.login(this.myForm.get('email').value, this.myForm.get('password').value)
      .subscribe((data: UsuarioWebLogin) => {
        console.log("Success", data)
        if (data.token) {
          alert("Login exitoso!");
          //Paso el token y cambio el estado a TRUE (estoy logueado):
          this.userServ.authenticate(data.token);
          this.ruta.navigateByUrl("/home");
        } else {
          alert(data["message"]);
        }
      },
        err => {
          console.log("Error", err)
        }
      )
  }

  ngOnInit(): void {
  }

}
