import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos'


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  productos : Producto;
  
  constructor(private ruta : ActivatedRoute, private prodServ: ProductosService) {
    const id : string = this.ruta.snapshot.paramMap.get("id");
    this.prodServ.porId(id)
      .subscribe((info : Producto) => {
        console.log("Data", info)
        this.productos = info;
  },
  err=>{
  console.log("err", err)
  })   
  }
 
  ngOnInit(): void {
  }

}
