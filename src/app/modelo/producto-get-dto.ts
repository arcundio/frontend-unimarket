import { ImagenDTO } from "./imagen-dto";

export class ProductoGetDTO {
    codigo: number = 0;
    estado: boolean = false;
    nombre: string = "";
    descripcion: string = "";
    precio: number = 0;
    unidades: number = 0;
    imagenes: ImagenDTO[] = [];
    categorias: string[] = [];


    constructor(codigo: number, nombre: string, descripcion: string,
        precio: number, unidades: number, imagenes: ImagenDTO[],
        categorias: string[], estado: boolean) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = unidades;
        this.imagenes = imagenes;
        this.categorias = categorias;
        this.estado = estado;
    }
}
