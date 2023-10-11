import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Pablo';
  genero: string = 'masculino';

  //! i18nSelect
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //! i18nPlural

  clientes: string[] = ['Mario', 'Roberto', 'Feliza', 'Martin', 'Diana'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.genero = 'femenino';
    this.nombre = 'Fernanda';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //! KEYVALUE PIPE
  persona = {
    nombre: 'Pablo',
    edad: 23,
    direccion: 'Depresion, Tristeza',
  };

  //! Json Pipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false },
  ];

  //! Async Pipe

  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data de promesa');
    }, 3500);
  });
}
