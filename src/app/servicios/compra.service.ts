import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompraDTO } from '../modelo/compra-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compraURL = "http://localhost:8081/api/compra";

  constructor(private http: HttpClient) { }

  public crear(compra: CompraDTO, cupon: string): Observable<MensajeDTO> {

    let params = new HttpParams().set('cupon', cupon);

    return this.http.post<MensajeDTO>(`${this.compraURL}/crear`, compra, {params: params});
  }

}
