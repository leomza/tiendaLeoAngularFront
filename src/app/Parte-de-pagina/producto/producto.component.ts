/*Este componente se encarga de renderizar la informacion del producto, 
yo le paso info de un producto y este se encarga de mostrarla y hacer cualquier logica
aplicada a un producto, no consulta a ningun servicio ni nada */
import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/productos';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  //info sera un JSON, va a recibir data de a un producto
  info: Producto={
    //Aca debo inicializar las variables del JSON:
    nombre:"",
    precio:0,
    _id:"",
    sku:"",
    categoria:{_id:"",nombre:""}
  }
  agregado: boolean= false;

  constructor(private userServ: UsuariosService, private ruta: Router) { }
    
  carrito(){
    //Para que el usuario no pueda comprar si no esta registrado
    if (this.userServ.estadoDeAutenticacion.value===true){
    localStorage.setItem("item",JSON.stringify(this.info))
    this.agregado=true;
    alert("Producto agregado al carrito")
    this.ruta.navigateByUrl("/venta");
    
    } else {
      alert("Por favor ingrese sesion o registre su cuenta antes de iniciar una compra")
    }
  }

  ngOnInit(): void {
  }

}
