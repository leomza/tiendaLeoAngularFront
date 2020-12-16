import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  todosProductos(){
    return this.http.get(environment.comienzoUrl+"productos")
  }

  porId(id:string){
    return this.http.get(environment.comienzoUrl+"productos/"+id)
  }

  }
