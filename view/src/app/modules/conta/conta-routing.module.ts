import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCadastrarEditarComponent } from './pages/conta-cadastrar-editar/conta-cadastrar-editar.component';
import { ContaDepositarComponent } from './pages/conta-depositar/conta-depositar.component';
import { ContaListarComponent } from './pages/conta-listar/conta-listar.component';
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
