import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { emailPattern } from '../../shared/validator/validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      console.log('required');

      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      console.log('pattern');

      return 'Email no es valido';
    } else if (errors?.['emailTomado']) {
      console.log('tomado');

      return 'El email ya esta en uso';
    }
    console.log();

    return '';
  }

  miFormulario: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPatten),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      verifyPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'verifyPassword'),
      ],
    }
  );

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      name: 'Pablo Valera',
      email: 'pablo@gmail.com',
      username: 'pablovr24',
      password: '123456',
      verifyPassword: '123456',
    });
  }
}
