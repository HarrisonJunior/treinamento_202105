import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContaDepositoDTO } from '../dtos/conta-deposito.dto';
import { ContaSaqueDTO } from '../dtos/conta-saque.dto';
import { ContaTransferenciaDTO } from '../dtos/conta-transferencia.dto';
import { ContaDTO } from '../dtos/conta.dto';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class ContaService {

    private controller = 'contas';

    constructor(private apiService: ApiService) {}

   getAll(): Observable<ContaDTO[]> {
        return this.apiService.get(`${this.controller}/`).pipe(map(response => response.body.map(item => new ContaDTO(item))));
    }

    getById(id: number): Observable<ContaDTO> {
        return this.apiService.get(`${this.controller}/${id}/`).pipe(map(response => new ContaDTO(response.body)));
    }

    create(obj: ContaDTO): Observable<any> {
        return this.apiService.post(`${this.controller}/`, obj);
    }

    update(obj: ContaDTO): Observable<any> {
        return this.apiService.put(`${this.controller}/${obj.id}/`, obj);
    }

    delete(id: number): Observable<any> {
      return this.apiService.delete(`${this.controller}/${id}/`);
    }

    depositar(obj: ContaDepositoDTO): Observable<any> {
      return this.apiService.post(`${this.controller}/deposito`, obj);
    }

    sacar(obj: ContaSaqueDTO): Observable<any> {
      return this.apiService.post(`${this.controller}/saque`, obj);
    }

    transferir(obj: ContaTransferenciaDTO): Observable<any> {
      return this.apiService.post(`${this.controller}/transferencia`, obj);
    }

    consultarPorCpfCliente(cpf: string): Observable<ContaDTO[]> {
      return this.apiService.get(`${this.controller}/consultar-contas-cliente/${cpf}`).pipe(map(response => response.body.map(item => new ContaDTO(item))));
    }
}
