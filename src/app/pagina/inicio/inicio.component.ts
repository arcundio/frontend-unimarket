import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  categorias: string[];
  productosCat: ProductoGetDTO[];
  alerta!: Alerta;

  constructor(private categoriaService: CategoriaService, private productoService: ProductoService) {
    this.categorias = [];
    this.productosCat = [];
    this.cargarCategorias();
  }

  private cargarCategorias() {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.respuesta;
      },
      error: error => {
        console.log(error.error);
      }
    });
  }

  public listarProductos(categoria: string) {
    const objeto = this;
    this.productosCat = [];
    this.productoService.listarPorCategoria(categoria).subscribe({
      next: data => {
        for (let producto of data.respuesta) {
          this.productosCat.push(producto);
        }
      }, 
      error: error => {
        console.log(error.error)
        objeto.alerta = new Alerta("No hay productos de esa categoria", "info");
      }
    })
    console.log(this.productosCat);
  }


}
