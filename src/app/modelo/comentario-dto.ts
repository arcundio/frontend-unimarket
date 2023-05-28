export class ComentarioDTO {
    
    mensaje: string;
    codigoUsuario: number;
    codigoProducto: number;

    constructor(mensaje: string, codigoUsuario: number, codigoProducto: number) {
        this.mensaje = mensaje;
        this.codigoUsuario = codigoUsuario;
        this.codigoProducto = codigoProducto;
    }

}
