import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  productos: ProductoGetDTO[];
  seleccionados: ProductoGetDTO[] = [];
  textoBtnEliminar: string = "";
  seleccionado!: ProductoGetDTO;
  btnTexto: string = "";
  iconTexto: string = "";

  constructor(private productoServicio: ProductoService, private tokenService: TokenService) {
    this.productos = [];
  }

  ngOnInit(): void {
    // this.productos = this.productoServicio.listar();
    const userId = this.tokenService.getUserId();
    this.productoServicio.listarPorUsuario(userId).subscribe({
      next: data => {
        this.productos = data.respuesta;
      },
      error: error => {
        console.log(error.error);
      }
    })
  }

  public seleccionar(producto: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != producto);
    }
    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }

  public borrarProductos() {
    this.seleccionados.forEach(e => {
      // borrada api

    this.productoServicio.eliminar(e.codigo).subscribe({
      next: data => {
        console.log(data.respuesta)
      },
      error: error => {
        console.log(error.error)
      }
    })

      // borrada lista 
    this.productos = this.productos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

  public crear() {
    this.btnTexto = "Crear nuevo";
    this.iconTexto = "plus";
    this.seleccionado = new ProductoGetDTO(0, "", "", 0, 0, [], [], false);
  }

  public actualizar(item: ProductoGetDTO) {
    this.btnTexto = "Actualizar";
    this.iconTexto = "pencil";
    this.seleccionado = Object.create(item);
  }

  public enviarDatos() {
    if (this.btnTexto == "Actualizar") {
      const indice = this.productos.findIndex(e => this.seleccionado.codigo == e.codigo);
      this.productos[indice] = this.seleccionado;
    } else {
      this.productos.push(this.seleccionado);
    }
    document.getElementById("cerrar-m")?.click();
  }

}
