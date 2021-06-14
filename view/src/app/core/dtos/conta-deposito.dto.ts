import { ClienteDTO } from './cliente.dto';

export class ContaDepositoDTO {

    //id: number;
    agencia: string;
    numeroConta: string;
    valor: number;

    constructor(obj?) {
        if (obj) {
           // this.id = obj.id;
            this.agencia = obj.agencia;
            this.numeroConta = obj.numeroConta;
            this.valor = obj.valor;
        }
    }
}
