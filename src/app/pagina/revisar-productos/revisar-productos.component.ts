import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoModeradorDTO } from 'src/app/modelo/producto-moderador-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-revisar-productos',
  templateUrl: './revisar-productos.component.html',
  styleUrls: ['./revisar-productos.component.css']
})
export class RevisarProductosComponent {

  productos: ProductoGetDTO[] = [];
  alerta!: Alerta;
  isAprobados: boolean;
  isRechazados: boolean;
  isPendientes: boolean;
  modId: number;


  constructor(private tokenService: TokenService, private productoService: ProductoService) {
    this.isAprobados = false;
    this.isRechazados = false;
    this.isPendientes = false;
    this.modId = tokenService.getUserId();
  }

  public mostrarProductos(estado: string) {

    switch(estado) {
      case "APROBADO": {
        this.isAprobados = true;
        break;
      }
      case "RECHAZADO": {
        this.isRechazados = true;
        break;
      }
      case "SIN_REVISAR": {
        this.isPendientes = true;
        break;
      }
    }

    this.productos = []
    const objeto = this;
    this.productoService.listarPorEstado(estado).subscribe({
      next: data => {
        this.productos = data.respuesta;
        console.log(data.respuesta)
      },
      error: error => {
        this.alerta = new Alerta(error.error, "info")
      }
    })
  }

  cambiarEstado(estado: string, codigoProducto: number) {

    let activo = 0;

    if (estado == "APROBADO") {
      activo = 1;
    }

    const productoModerador = new ProductoModeradorDTO(
      "meh",
      this.modId,
      estado,
      codigoProducto
    );

      this.productoService.actualizarEstado(codigoProducto, activo, productoModerador).subscribe({
        next: data => {
          console.log("funcionó")
        },
        error: error => {
          console.log("nop")
        }
      })

  }


}
