import { CuponDTO } from "./cupon-dto";
import { DetalleCompraDTO2 } from "./detalle-compra-dto2";

export class CompraGetDTO {
    codigo: number = 0;
    fecha: string = "";
    valorTotal: number = 0;
    codigoUsuario: number = 0;
    metodoPago: string = "";
    detalleCompraDTO: DetalleCompraDTO2[] = []
    cupon!: CuponDTO
}
