import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { CompraDTO } from 'src/app/modelo/compra-dto';
import { CompraService } from 'src/app/servicios/compra.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  compras!: CompraDTO[];
  alerta!: Alerta;
  codigoUsuario: number;

  constructor(private compraService: CompraService, private tokenService: TokenService) {
    this.codigoUsuario = tokenService.getUserId();
    this.compras = []

  }

}
