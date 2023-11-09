import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup=  new FormGroup({
  //   product: new FormControl('RTX 4080Ti'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  miFormulario: FormGroup = this.fb.group({
    product: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.setValue({ product: 'RTX', price: 1600, stock: 10 });
  }
}
