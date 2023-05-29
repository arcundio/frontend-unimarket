import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompraDTO } from '../modelo/compra-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compraURL = "https://unimarket-production-93a9.up.railway.app/api/compra";

  constructor(private http: HttpClient) { }

  public crear(compra: CompraDTO, cupon: string): Observable<MensajeDTO> {
    let params = new HttpParams().set('cupon', cupon);
    return this.http.post<MensajeDTO>(`${this.compraURL}/crear`, compra, { params: params });
  }

  public listar(codigoUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.compraURL}/listar/${codigoUsuario}`)
  }

}
