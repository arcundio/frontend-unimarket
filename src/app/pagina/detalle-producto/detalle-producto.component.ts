import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alerta } from 'src/app/modelo/alerta';
import { ComentarioDTO } from 'src/app/modelo/comentario-dto';
import { MensajeDTO } from 'src/app/modelo/mensaje-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ComentarioService } from 'src/app/servicios/comentario.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  codigoProducto!: number;
  alerta!: Alerta;
  alertaFav!: Alerta;
  comentarios: ComentarioDTO[];
  mensaje: string;

  constructor(private carritoService: CarritoService, private route: ActivatedRoute, 
    private comentarioService: ComentarioService, private productoService: ProductoService,
    private tokenService: TokenService) {

    this.mensaje = "";
    this.comentarios = []
    this.codigoProducto = 0;
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
    });
  }

  public agregarCarrito() {
    const objeto = this;
    this.carritoService.agregar(this.codigoProducto);
    objeto.alerta = new Alerta("El producto se ha añadido al carrito", "success")
  }

  public agregarFavorito() {

    const userId = this.tokenService.getUserId();
    const objeto = this;

    this.productoService.guardarFavorito(this.codigoProducto, userId).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error, "danger");
      }
    })
  }

  public crearComentario() {
    const userId = this.tokenService.getUserId();
    const objeto = this;

    if(this.mensaje != null) {
      let comentario = new ComentarioDTO(
        this.mensaje,
        userId,
        this.codigoProducto
      );

      console.log(comentario)
      
      this.comentarioService.crear(comentario).subscribe({
        next: data => {
          objeto.alerta = new Alerta(data.respuesta, "success");
          console.log(comentario)
        },
        error: error => {
          objeto.alerta = new Alerta(error.respuesta, "danger");
        }
      })
    }
  }

}