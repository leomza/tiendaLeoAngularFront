import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioWeb} from '../../interfaces/usuarios';
import { Router } from '@angular/router';
import { UsuarioWebLogin } from '../../interfaces/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder, private userServ: UsuariosService, private ruta : Router) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  crearUsuario() {
    console.log(this.myForm.value)
    this.userServ.registrar(this.myForm.value)
      .subscribe((data : UsuarioWeb) => {
        console.log("Data", data)
        if (data) {
          this.userServ.login(this.myForm.get('email').value, this.myForm.get('password').value).subscribe((info: UsuarioWebLogin) => {
            this.userServ.authenticate(info.token);
          })
          alert("Usuario creado con exito")
          this.ruta.navigateByUrl("/home");
        } else {
          alert(data["message"]);
        }
      },
        err => {
          console.log("Ocurrio un error", err)
          alert(err.error.mensaje)
        })
  }

  ngOnInit(): void {
  }

}
