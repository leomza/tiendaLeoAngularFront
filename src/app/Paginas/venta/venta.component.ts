import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  producto
  guardado : any

  constructor() {

  //Obtengo el producto del localStorage, lo parseo a JSON ya que localStorage solo recibe String: 
  this.guardado=localStorage.getItem("item"); 
  this.producto=JSON.parse(this.guardado) 
  console.log(this.producto)
  }

  ngOnInit(): void {
  }

}
