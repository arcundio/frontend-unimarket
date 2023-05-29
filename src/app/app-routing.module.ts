import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { CrearComentarioComponent } from './pagina/crear-comentario/crear-comentario.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { CuponComponent } from './pagina/cupon/cupon.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { PqrsComponent } from './pagina/pqrs/pqrs.component';
import { SubirImagenesComponent } from './pagina/subir-imagenes/subir-imagenes.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { LoginGuard } from './guards/permiso.service';
import { RevisarProductosComponent } from './pagina/revisar-productos/revisar-productos.component';
import { RolesGuard } from './guards/roles.service';
import { ComprasComponent } from './pagina/compras/compras.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { EditarProductoComponent } from './pagina/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "compras", component: ComprasComponent},
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "crear-comentario", component: CrearComentarioComponent },
  {path: "crear-producto", component: CrearProductoComponent, canActivate: [RolesGuard], data: {
      expectedRole: ["CLIENTE"]}
  },
  {path: "editar-producto/:codigo", component: EditarProductoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"]}
  },
  { path: "cupon", component: CuponComponent },
  { path: "listar-productos", component: ListarProductosComponent },
  { path: "pqrs", component: PqrsComponent },
  { path: "subir-imagenes", component: SubirImagenesComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "gestion-productos", component: GestionProductosComponent, canActivate:[RolesGuard], data: {  
    expectedRole: ["CLIENTE"] }},
  { path: "revisar-productos", component: RevisarProductosComponent, canActivate: [RolesGuard],
data: { expectedRole: ["MODERADOR"] } },
  { path: "carrito", component: CarritoComponent },
  { path: "detalle-producto/:codigo", component: DetalleProductoComponent},
  { path: "favoritos", component: FavoritosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
