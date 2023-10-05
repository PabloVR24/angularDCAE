# Comandos parte Giphy

## CLI

### AGREGAR UN NUEVO COMPONENTE SIN ESTILOS NI TESTS

```
ng g c gifs/gifsPage  --skip-tests --inline-style
```

## ANGULAR

### Obtener referencias a objetos HTML

```
@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
8 - @ViewChild - Obtener referencias a objetos HTML
```

Aqui estamos diciendo que vamos a buscar un objeto HTML mediante su id(#txtBuscar) y usamos ! para decir que ese objeto si esta presente, como flutter

```
<input type="text" name="" id="" class="form-control" placeholder="Buscar en GIPHY" (keyup.enter)="buscar()" #txtBuscar/>
```
