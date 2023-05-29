import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CompraDTO } from 'src/app/modelo/compra-dto';
import { CompraGetDTO } from 'src/app/modelo/compra-get-dto';
import { CompraService } from 'src/app/servicios/compra.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  compras: CompraGetDTO[];
  alerta!: Alerta;
  codigoUsuario: number;

  constructor(private compraService: CompraService, private tokenService: TokenService) {
    this.codigoUsuario = tokenService.getUserId();
    this.compras = []

    this.compraService.listar(this.codigoUsuario).subscribe({
      next: data => {
        this.compras = data.respuesta
        console.log(data.respuesta);
      }, 
      error: error => {
        console.log(error.error);
      }
    })

  }

}
