import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  textoBusqueda: string;
  productos!: ProductoGetDTO[];
  filtro: ProductoGetDTO[];

  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) {
    this.filtro = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params["texto"];
      console.log(params["texto"])
      /*
      this.filtro = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()));
        */
      this.productoServicio.listarPorNombre(this.textoBusqueda).subscribe({
        next: data => {
          this.filtro = data.respuesta;
        },
        error: error => {
          console.log(error.error)
        }
      })
    });
  }
}
