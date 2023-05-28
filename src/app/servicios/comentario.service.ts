import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ComentarioDTO } from '../modelo/comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {


  private catURL = "http://localhost:8081/api/comentario";

  constructor(private http: HttpClient) { }

  public crear(comentario: ComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.catURL}/crear`, ComentarioDTO);
  }
}
