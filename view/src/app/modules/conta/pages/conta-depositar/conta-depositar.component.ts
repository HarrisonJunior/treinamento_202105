import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBase } from "../../../../core/classes/form-base";
import { ContaDepositoDTO } from "../../../../core/dtos/conta-deposito.dto";
import { ContaService } from "../../../../core/services/conta.service";
import { SweetalertCustom } from "../../../../shared/utils/sweetalert-custom";
import { ValidatorsCustom } from "../../../../shared/utils/validators-custom";

@Component({
  selector: 'app-conta-depositar',
  templateUrl: './conta-depositar.component.html',
  styleUrls: ['./conta-depositar.component.scss']
})
export class ContaDepositarComponent extends FormBase implements OnInit {

  constructor(private contaService: ContaService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,) {
    super();
  }

  ngOnInit() {
    this.validateMensageError();
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      agencia: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('agencia'), [Validators.required]),
      numeroConta: new FormControl(this.activatedRoute.snapshot.queryParamMap.get('numero'), [Validators.required]),
      valor: new FormControl(0, [Validators.required,ValidatorsCustom.lessThanOne])
    });
  }

  validateMensageError() {
    this.createValidateFieldMessage({
      agencia: {
        required: 'Agência obrigatória.'
      },
      numeroConta: {
        required: 'Número obrigatório.'
      },
      valor: {
        required: 'Valor obrigatório.',
        lessThanOne: 'Valor informado deve ser maior que zero.'
      }
    });
  }

  onSubmit() {
    //verifica se o formulario é válido
    if (this.form.valid) {
      this.depositar();
    }
  }

  depositar() {
    const entity = this.formToContaDTO();
    this.contaService.depositar(entity).subscribe(
      () => {
        SweetalertCustom.showAlertTimer('Operação realizada com sucesso.', { type: 'success' }).then(() => {
          this.router.navigate(['/conta']);
        });
      }
    );
  }

  formToContaDTO(): ContaDepositoDTO {
    const formValue = this.form.value; 
    const entity = new ContaDepositoDTO({
      agencia: formValue.agencia,
      numeroConta: formValue.numeroConta,
      valor: formValue.valor
    });
    return entity;
  }


}
