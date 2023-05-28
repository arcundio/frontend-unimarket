import { Component } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  isMod = false;

  constructor(private tokenService: TokenService) {
    const rol = tokenService.getRole();
    console.log(rol[0])
    if (rol[0] = "MODERADOR") {
      this.isMod = true;
    }
  }


}
