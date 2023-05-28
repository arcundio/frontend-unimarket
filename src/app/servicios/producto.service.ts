import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { HttpClient } from '@angular/common/http';
import { ProductoDTO } from '../modelo/producto-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ImagenDTO } from '../modelo/imagen-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private authURL = "http://localhost:8081/api/producto";

  productos: ProductoGetDTO[];
  constructor(private http: HttpClient) {
    this.productos = [];
    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
      [new ImagenDTO("", "https://picsum.photos/450/225"), new ImagenDTO("", "https://picsum.photos/450/225")], ["TECNOLOGIA"], false),);
    this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
      [new ImagenDTO("", "https://picsum.photos/450/225")], ["ROPA", "DEPORTE"], false));
  } 

  public crear(producto: ProductoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crear`, producto);
  }

  public listar(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductos`);
  }

  public listarPorUsuario(codigoUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductosUsuario/${codigoUsuario}`);
  }

  public listarPorNombre(nombre: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductosNombre/${nombre}`);
  }

  /* 
  public obtener(codigo: number) {
    return this.productos.find(p => p.codigo == codigo);
  }
  */

  public obtener(codigo:number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/obtener/${codigo}`);
  }

  public guardarFavorito(codigoProducto: number, codigoUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/guardarFavorito/${codigoProducto}/${codigoUsuario}`);
  }

  public eliminar(codigoProducto: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.authURL}/eliminar/${codigoProducto}`);
  }

}
