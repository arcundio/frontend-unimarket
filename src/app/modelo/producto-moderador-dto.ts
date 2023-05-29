export class ProductoModeradorDTO {
    motivo: string;
    codigoModerador: number;
    estado: string;
    codigoProducto: number;

    constructor(motivo: string, codigoModerador: number,
        estado: string, codigoProducto: number) {
        this.motivo = motivo;
        this.codigoModerador = codigoModerador;
        this.estado = estado;
        this.codigoProducto = codigoProducto;
    }

}
