import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto!: number;

  constructor(private carritoService: CarritoService, private route: ActivatedRoute) {
    this.codigoProducto = 0;
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
    });
  }

  public agregarCarrito() {
    this.carritoService.agregar(this.codigoProducto);
    console.log(this.codigoProducto);
  }

}