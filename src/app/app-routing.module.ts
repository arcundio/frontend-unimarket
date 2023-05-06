import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { CrearComentarioComponent } from './pagina/crear-comentario/crear-comentario.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { CuponComponent } from './pagina/cupon/cupon.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { ModEstadoComponent } from './pagina/mod-estado/mod-estado.component';
import { ModInicioComponent } from './pagina/mod-inicio/mod-inicio.component';
import { PqrsComponent } from './pagina/pqrs/pqrs.component';
import { SubirImagenesComponent } from './pagina/subir-imagenes/subir-imagenes.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: "login", component: LoginComponent},
  { path: "registro", component: RegistroComponent},
  { path: "crear-comentario", component: CrearComentarioComponent},
  { path: "crear-producto", component: CrearProductoComponent},
  { path: "cupon", component: CuponComponent},
  { path: "listar-productos", component: ListarProductosComponent},
  { path: "mod-estado", component: ModEstadoComponent},
  { path: "mod-inicio", component: ModInicioComponent},
  { path: "pqrs", component: PqrsComponent},
  { path: "subir-imagenes", component: SubirImagenesComponent},
  { path: "busqueda/:texto", component: BusquedaComponent},
  { path: "gestion-productos", component: GestionProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
