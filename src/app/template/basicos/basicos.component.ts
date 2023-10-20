import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['product']?.invalid &&
      this.miFormulario?.controls['product']?.touched
    );
  }
  precioValido(): boolean {
    return (
      this.miFormulario?.controls['price']?.touched &&
      this.miFormulario?.controls['price']?.value < 0
    );
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
