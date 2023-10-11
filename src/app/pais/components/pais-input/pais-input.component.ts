import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Buscar Pais';

  debouncer: Subject<string> = new Subject();
  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

  //ESPERAR 500 MS ANTES DE EJECUTAR
  ngOnInit() {
    this.debouncer.pipe(debounceTime(500)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
}
