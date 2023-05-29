import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  listaFavoritos: ProductoGetDTO[];
  userId: number;
  constructor(private tokenService: TokenService, private productoService: ProductoService) {

    this.listaFavoritos = [];
    this.userId = tokenService.getUserId();

    this.productoService.listarFavoritos(this.userId).subscribe({
      next: data => {
        this.listaFavoritos = data.respuesta;
        console.log(data.respuesta);
      }, 
      error: error => {
        console.log(error.error);
      }
    })

  }

  
  
}
