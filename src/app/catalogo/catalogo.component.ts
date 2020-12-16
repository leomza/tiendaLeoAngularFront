import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto, ProductoPaginado } from '../interfaces/productos'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos : Producto []= [];

  constructor(private prodServ: ProductosService) {

    this.prodServ.todosProductos()
      .subscribe((info : ProductoPaginado) => {
        console.log("Data", info)
    this.productos = info["docs"];
  },
  err=>{
  console.log("err", err)
  })
  }

ngOnInit(): void {
}

}
