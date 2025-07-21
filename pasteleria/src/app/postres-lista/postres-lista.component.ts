import { Component, OnInit } from '@angular/core';
import { Postre } from './Postre';
import { PostreCarritoService } from '../postre-carrito.service';
import { PostreDataService } from '../postre-data.service';

@Component({
  selector: 'postres-lista',
  standalone: false,
  templateUrl: './postres-lista.component.html',
  styleUrl: './postres-lista.component.scss',
})
export class PostresListaComponent implements OnInit{
  postres: Postre[] = [];

  constructor(
    private carrito: PostreCarritoService,
    private postresDataService: PostreDataService) {
  }

  ngOnInit(): void {
      this.postresDataService.getAll()
      .subscribe(postres => this.postres = postres);
  }

  agregarAlCarrito(postre: Postre) : void {
    this.carrito.agregarAlCarrito(postre);
    postre.stock -= postre.porciones;
    postre.porciones = 0;
  }

  maxAlcanzado(n : number) {
    alert("cantidad maxima: " + n);
  }
}
