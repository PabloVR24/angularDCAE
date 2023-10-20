import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/hero-interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${environment.apiUrl}/heroes`);
  }

  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${environment.apiUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${environment.apiUrl}/heroes?q=${termino}&_limit=5`
    );
  }

  addHero(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${environment.apiUrl}/heroes`, heroe);
  }

  editHero(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(
      `${environment.apiUrl}/heroes/${heroe.id}`,
      heroe
    );
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/heroes/${id}`);
  }
  //deleteHero(id: string): Observable<Heroe> {}
}
