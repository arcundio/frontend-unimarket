import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ImagenDTO } from 'src/app/modelo/imagen-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  producto: ProductoDTO;
  archivos!: FileList;
  categorias: string[];
  categoriasSeleccionadas!: string[];
  alertaImagen!: Alerta;
  alertaProducto!: Alerta;
  
  constructor(private imagenService: ImagenService, private categoriaService: CategoriaService,
   private productoService: ProductoService, private tokenService: TokenService) {
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

  public crearProducto() {

    const pagina = this;

    if (this.producto.imagenes.length > 0) {
      this.producto.categorias = this.categoriasSeleccionadas;
      this.producto.codigoVendedor = this.tokenService.getUserId();
      console.log(this.producto);
      this.productoService.crear(this.producto).subscribe({
        next: data => {
          pagina.alertaProducto = new Alerta(data.respuesta, "success");
        },
        error: error => {
          pagina.alertaProducto = new Alerta(error.respuesta, "danger");
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  public subirImagenes() {

    const pagina = this;

    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          objeto.imagenes.push( new ImagenDTO(data.respuesta.public_id, data.respuesta.url) );
          pagina.alertaImagen = new Alerta("La(s) imagen(es) se han subido correctamente", "success")
        },
        error: error => {
          pagina.alertaImagen = new Alerta(error.error, "danger")
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

}
