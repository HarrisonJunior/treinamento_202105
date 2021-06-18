
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { ContaDTO } from 'src/app/core/dtos/conta.dto';
import { ContaService } from 'src/app/core/services/conta.service';
import { SweetalertCustom } from 'src/app/shared/utils/sweetalert-custom';

@Component({
  selector: 'app-conta-listar',
  templateUrl: './conta-listar.component.html',
  styleUrls: ['./conta-listar.component.scss']
})
export class ContaListarComponent implements OnInit {

  @Input() carregarAoIniciar: boolean;
  @Input() contas = new Array<ContaDTO>();

  constructor(public router: Router, private contaService: ContaService, private orderPipe: OrderPipe) {
    this.carregarAoIniciar = true;
  }

  ngOnInit() {
    if (this.carregarAoIniciar) {
      this.getAll();
    }
  }

  getAll() {
    this.contaService.getAll().subscribe(
      (response) => {
        this.contas = response;
      }
    );
  }

  update(id: number) {
    this.router.navigate(['/conta/editar', id]);
  }

  delete(id: number) {
    SweetalertCustom.showAlertConfirmAndCancel('Deseja excluir?', {type: 'warning'}).then((response) => {
      if (response.value) {
        this.contaService.delete(id).subscribe(() => {
          SweetalertCustom.showAlertTimer('Operação realizada com sucesso.', {type: 'success'}).then(() => {
            this.getAll();
          });
        });
      }
    });
  }

  depositar(id: number, agencia: string, numero: string) {
    this.router.navigate(['/conta/depositar'], { queryParams: { agencia:agencia,numero:numero} });
  }

  sacar(id: number, agencia: string, numero: string) {
    this.router.navigate(['/conta/sacar'], { queryParams: { agencia: agencia, numero: numero } });
  }

  transferir(id: number, agencia: string, numero: string) {
    this.router.navigate(['/conta/transferir'], { queryParams: { agencia: agencia, numero: numero } });
  }

  ordenarPor(campo: string) {
    this.contas = this.orderPipe.transform(this.contas, campo);
  }

}
