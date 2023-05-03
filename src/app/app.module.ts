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
import { ModEstadoComponent } from './pagina/mod-estado/mod-estado.component';
import { ModInicioComponent } from './pagina/mod-inicio/mod-inicio.component';
import { CrearComentarioComponent } from './pagina/crear-comentario/crear-comentario.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { RegistroComponent } from './pagina/registro/registro.component';

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
    ModEstadoComponent,
    ModInicioComponent,
    CrearComentarioComponent,
    ListarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
