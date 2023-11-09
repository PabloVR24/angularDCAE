import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [['Hollow Knight'], ['Ori 1']],
      Validators.required
    ),
  });

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  eliminar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  constructor(private fb: FormBuilder) {}
}
