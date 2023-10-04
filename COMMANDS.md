# CMD
## Creacion de modulo desde CMD
```
ng g m dbz
```

## Creacion de COMPONENTE sin Tests 
```
ng g c dbz/mainPage --skip-tests
```


# Angular
El uso de [ ] en el html es para lectura de un objeto
El uso de ( ) en el html es para emitir o escuchar eventos

### Input (TS)
```
@Input() personajes: Personaje[] = [];
```
Utilizamos Input para la lectura de algun valor en otro componente o componente padre
#### Declaracion en HTML
```
 <app-personajes [personajes]="personajes"></app-personajes>
```

### Output (TS)
```
@Output() onNuevoPersonake: EventEmitter<Personaje> = new EventEmitter();
```
Utilizamos Output para exportar un evento en este caso el evento es de tipo Personaje
Los <> son un generico que puede recibir cualquier cosa, string, number, objeto
#### Declaracion en HTML
```
 <app-agregar (onNuevoPersonake)="agregarNuevoPersonaje($event)"
```
