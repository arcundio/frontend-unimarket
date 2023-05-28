import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { PqrsComponent } from './pagina/pqrs/pqrs.component';
import { CuponComponent } from './pagina/cupon/cupon.component';
import { SubirImagenesComponent } from './pagina/subir-imagenes/subir-imagenes.component';
import { CrearComentarioComponent } from './pagina/crear-comentario/crear-comentario.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { ComprasComponent } from './pagina/compras/compras.component';
import { EditarProductoComponent } from './pagina/editar-producto/editar-producto.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    PqrsComponent,
    CuponComponent,
    SubirImagenesComponent,
    CrearComentarioComponent,
    ListarProductosComponent,
    BusquedaComponent,
    GestionProductosComponent,
    AlertaComponent,
    DetalleProductoComponent,
    CarritoComponent,
    RevisarProductosComponent,
    ComprasComponent,
    EditarProductoComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
