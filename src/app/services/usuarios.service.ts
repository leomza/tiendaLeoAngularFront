import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Aca instancio el BehaviorSubject, si es TRUE estoy LOGUEADO, si es FALSE NO lo estoy
  estadoDeAutenticacion = new BehaviorSubject((localStorage.getItem("token")?true:false));

  constructor(private http: HttpClient) { }
  registrar(datos){
    return this.http.post(environment.comienzoUrl+"usuariosWeb/registro",datos)
  }
  
  login(email,password){
    return this.http.post(environment.comienzoUrl+"usuariosWeb/login", {email:email,password:password})
  }

  datosCuenta(id : String){
    return this.http.get(environment.comienzoUrl+"usuariosWeb/"+id)
  }

  logOut(){
    localStorage.clear();
    this.estadoDeAutenticacion.next(false);
  }
  authenticate(token:string){
    localStorage.setItem("token",token);
    this.estadoDeAutenticacion.next(true);
  }
  //Devuelve el estado para que en el observable le pueda hacer un suscribe:
  isAuthenticate(){
    return this.estadoDeAutenticacion;
  }
  //Devuelve el estado, si es TRUE o FALSE
  isAuthenticated(){
    return this.estadoDeAutenticacion.value;
  }

  mostrarDatos(id){
    return this.http.get(environment.comienzoUrl+"usuariosWeb/"+id);

  }
  
}
