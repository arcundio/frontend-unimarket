import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { HttpClient } from '@angular/common/http';
import { ProductoDTO } from '../modelo/producto-dto';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ImagenDTO } from '../modelo/imagen-dto';
import { ProductoModeradorDTO } from '../modelo/producto-moderador-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private authURL = "https://unimarket-production-93a9.up.railway.app/api/producto";

  productos: ProductoGetDTO[];
  constructor(private http: HttpClient) {
    this.productos = [];
  } 

  public crear(producto: ProductoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crear`, producto);
  }

  public actualizar(codigoProducto: number, producto: ProductoDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.authURL}/actualizarProducto/${codigoProducto}`, producto);
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

  public listarPorCategoria(categoria: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductosCategoria/${categoria}`);
  }

  public listarFavoritos(codigoUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductosFavoritos/${codigoUsuario}`);
  }

  public listarPorEstado(estado: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarProductosEstado/${estado}`);
  }

  public actualizarEstado(codigoProducto: number, activo: number, productoModerador: ProductoModeradorDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.authURL}/actualizarEstado/${codigoProducto}/${activo}`, productoModerador);
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
