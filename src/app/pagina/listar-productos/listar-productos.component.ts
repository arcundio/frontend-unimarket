import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{
  productos!: ProductoGetDTO[];

  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) {
  }

  ngOnInit(): void {
    this.productoServicio.listar().subscribe({
      next: data => {
        this.productos = data.respuesta
        console.log(this.productos)
      },
      error: error => {
        console.log(error.error)
      }
    })
  }

  

}
