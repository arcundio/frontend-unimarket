export class DetalleCompraDTO2 {

    codigoProducto: number;
    unidades: number;
    precio: number;

    constructor(codigoProducto: number, unidades: number, precio: number) {
        this.codigoProducto = codigoProducto;
        this.unidades = unidades;
        this.precio = precio;
    }
}
