import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCadastrarEditarComponent } from './pages/conta-cadastrar-editar/conta-cadastrar-editar.component';
import { ContaConsultarComponent } from './pages/conta-consultar/conta-consultar.component';
import { ContaDepositarComponent } from './pages/conta-depositar/conta-depositar.component';
import { ContaListarComponent } from './pages/conta-listar/conta-listar.component';
import { ContaSacarComponent } from './pages/conta-sacar/conta-sacar.component';
import { ContaTransferirComponent } from './pages/conta-transferir/conta-transferir.component';
import { ContaComponent } from './pages/conta.component';

const routes: Routes = [
  {
    path: '',
    component: ContaComponent,
    children: [
      {
        path: '',
        component: ContaListarComponent
      },
      {
        path: 'cadastrar',
        component: ContaCadastrarEditarComponent
      },
      {
        path: 'editar/:id',
        component: ContaCadastrarEditarComponent
      },
      {
        path: 'depositar',
        component: ContaDepositarComponent
      },
      {
        path: 'sacar',
        component: ContaSacarComponent
      },
      {
        path: 'transferir',
        component: ContaTransferirComponent
      },
      {
        path: 'consultar-por-cliente',
        component: ContaConsultarComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
