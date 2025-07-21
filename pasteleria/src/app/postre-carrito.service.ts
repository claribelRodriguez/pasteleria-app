import { Injectable } from '@angular/core';
import { Postre } from './postres-lista/Postre';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostreCarritoService {
  private _listaCompra: Postre[] = []

  listaCompra: BehaviorSubject<Postre[]>  = new BehaviorSubject(this._listaCompra);

  constructor() {}
  
  agregarAlCarrito(postre: Postre) {
    let item: Postre | undefined = this._listaCompra.find((v1) => v1.nombre == postre.nombre);
    if(!item) {
      this._listaCompra.push({...postre});
    } else {
      item.porciones += postre.porciones;
    }
    console.log(this._listaCompra);
    this.listaCompra.next([...this._listaCompra]);
  }
}
