import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseURL: string = environment.apiUrl;
  private _auth: Auth | undefined;

  get getAuth():Auth {
    return { ...this._auth! };
  }

  login() {
    return this.http
      .get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(tap((resp) => (this._auth = resp)));
  }
}
