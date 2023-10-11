import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _baseURL: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._baseURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    //.pipe(catchError((err) => of([])));
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._baseURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    //.pipe(catchError((err) => of([])));
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._baseURL}/region/${region}`;
    console.log(url);

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisAlpha(id: string): Observable<Country[]> {
    const params = new HttpParams().set('codes', id);

    const url = `${this._baseURL}/alpha/${params}`;
    console.log('URL:', url); // Verifica que la URL sea correcta
    return this.http.get<Country[]>(url);
    //.pipe(catchError((err) => of([])));
  }
}
