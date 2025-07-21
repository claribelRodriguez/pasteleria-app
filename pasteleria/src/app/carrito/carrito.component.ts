import { Component } from '@angular/core';
import { PostreCarritoService } from '../postre-carrito.service';
import { Postre } from '../postres-lista/Postre';
import { Observable } from 'rxjs';

@Component({
  selector: 'carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  listaCompra$: Observable<Postre[]>;

  constructor(private carrito: PostreCarritoService) {
    this.listaCompra$ = carrito.listaCompra.asObservable();
  }
}
