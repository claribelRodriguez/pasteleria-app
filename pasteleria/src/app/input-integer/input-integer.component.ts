import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Postre } from '../postres-lista/Postre';

@Component({
  selector: 'input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  constructor() {}

  //tuve que setear a ambos como 0 porque me tira error
  @Input() 
  cantidad: number = 0;
  
  @Input() 
  max: number = 0;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter<number> = new EventEmitter<number>();


  restarCantidad() : void {
    if(this.cantidad > 0) { 
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
    
  }
  
  sumarCantidad() : void {
    if(this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maxAlcanzado.emit(this.max);
    }
  }

  //si no le agregaba KeyboardEvent me tira error
  onChangeCantidad(event: KeyboardEvent) : void {
    console.log(event.key)
    this.cantidadChange.emit(this.cantidad);
  }
}
