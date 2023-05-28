import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CompraDTO } from 'src/app/modelo/compra-dto';
import { CuponDTO } from 'src/app/modelo/cupon-dto';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { DetalleCompraDTO2 } from 'src/app/modelo/detalle-compra-dto2';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { CompraService } from 'src/app/servicios/compra.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  productos: DetalleCompraDTO[];
  productos2: DetalleCompraDTO2[] = [];
  valorTotal: number;
  codigoUsuario: number;
  alerta!: Alerta;

  constructor(private carritoService: CarritoService, private productoService: ProductoService,
    private tokenService: TokenService, private compraService: CompraService) {
    this.productos = [];
    this.valorTotal = 0;
    this.codigoUsuario = tokenService.getUserId();
    const listaCodigos = this.carritoService.listar();

    console.log(listaCodigos);

    if (listaCodigos.length > 0) {
      for (let cod of listaCodigos) {
        // const producto = this.productoService.obtener(cod);
        this.productoService.obtener(cod).subscribe({
          next: data => {
            const producto = data.respuesta;
            this.productos.push(new DetalleCompraDTO(producto, 1));
            this.valorTotal += producto.precio;
          },
          error: error => {
            console.log(error.error)
          }
        })
      }
    }

    

  }
  public actualizarValorTotal(){
    for(let detalleTransaccion of this.productos){
      this.valorTotal += (detalleTransaccion.unidades * detalleTransaccion.producto.precio)
    }
  }

  

  public realizarCompra() {

    const objeto = this;

    for (let detalle of this.productos) {
      let producto = new DetalleCompraDTO2(
        detalle.producto.codigo,
        detalle.unidades,
        detalle.unidades * detalle.producto.precio
      );
      this.productos2.push(producto)
    }

    let metodoPago = "NEQUI";
    let cupon = new CuponDTO(1000, "cupon1");
    let nombreCupon = cupon.nombre;
    const compra = new CompraDTO(
      this.codigoUsuario,
      metodoPago,
      this.productos2,
      cupon
    );

    this.compraService.crear(compra, nombreCupon).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      }, 
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    })

  }

}