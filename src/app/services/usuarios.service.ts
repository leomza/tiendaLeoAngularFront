import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  registrar(datos){
    return this.http.post(environment.comienzoUrl+"usuariosWeb/registro",datos)
  }
  login(email,password){
    return this.http.post(environment.comienzoUrl+"usuariosWeb/login", {email:email,password:password})
  }
}
