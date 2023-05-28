import { ImagenDTO } from "./imagen-dto";

export class ProductoDTO {
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    codigoVendedor: number = 1;
    imagenes: ImagenDTO[] = [];
    categorias: string[] = [];
}
