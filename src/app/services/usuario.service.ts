import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient, 
              private router: Router) { }  

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/validarJWT`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  } 

  login( formData: LoginForm ) {
    
    return this.http.post(`${ base_url }/login`, formData )
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token)
                })
              )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
  }
}