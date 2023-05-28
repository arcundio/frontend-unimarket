import { Component } from '@angular/core';
import { ImagenDTO } from 'src/app/modelo/imagen-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  producto: ProductoDTO;
  archivos!: FileList;
  categorias: string[];
  categoriasSeleccionadas!: string[];

  constructor(private imagenService: ImagenService, private categoriaService: CategoriaService,
    private productoService: ProductoService) {
    this.categorias = [];
    this.categoriasSeleccionadas = [];
    this.cargarCategorias();
    this.producto = new ProductoDTO();
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


  public actualizarProducto() {
    if (this.producto.imagenes.length > 0) {
      this.producto.categorias = this.categoriasSeleccionadas;
      console.log(this.producto);
      this.productoService.crear(this.producto).subscribe({
        next: data => {
          console.log(data.respuesta);
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          objeto.imagenes.push( new ImagenDTO(data.respuesta.public_id, data.respuesta.url) );
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  onCheckboxChange(event: any, item: string) {
    if (event.currentTarget.checked) {
      this.categoriasSeleccionadas.push(item)
      console.log(this.categoriasSeleccionadas)
    } else {
      const index = this.categoriasSeleccionadas.indexOf(item);
      if (index !== -1) {
        this.categoriasSeleccionadas.splice(index, 1)
      }
    }

  }

}
