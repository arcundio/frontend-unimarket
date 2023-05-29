import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ComentarioDTO } from '../modelo/comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {


  private catURL = "https://unimarket-production-93a9.up.railway.app/api/comentario";

  constructor(private http: HttpClient) { }

  public crear(comentario: ComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.catURL}/crear`, ComentarioDTO);
  }

  public listarComentarios(codigoProducto: number):Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.catURL}/listar/${codigoProducto}`);
  }
}
