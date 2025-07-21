import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Postre } from './postres-lista/Postre';

const URL = 'https://687d76bb918b64224331dd4d.mockapi.io/postres';

@Injectable({
  providedIn: 'root'
})
export class PostreDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Postre[]> {
    return this.http.get<Postre[]>(URL)
      .pipe(
        tap((postres: Postre[]) => postres.forEach(postre => postre.porciones = 0))
      );
  }
}
 