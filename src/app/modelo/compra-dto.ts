import { CuponDTO } from "./cupon-dto";
import { DetalleCompraDTO2 } from "./detalle-compra-dto2";

export class CompraDTO {
    codigoUsuario: number;
    metodoPago: string;
    detalleCompraDTO: DetalleCompraDTO2[];
    cuponDTO: CuponDTO;


	constructor(codigoUsuario: number, metodoPago: string, detalleCompraDTO: DetalleCompraDTO2[],
        cuponDTO: CuponDTO) {
            this.codigoUsuario = codigoUsuario;
            this.metodoPago = metodoPago;
            this.detalleCompraDTO = detalleCompraDTO;
            this.cuponDTO = cuponDTO;
	}


}
