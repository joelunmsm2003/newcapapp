import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 import { HttpClientModule } from '@angular/common/http';


export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class AppService {


  url = 'http://comunica7.com/';
  apiKey = ''; // <-- Enter your own key here!
 

  constructor(private http: HttpClient) { }



  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }


   traecliente(tipo: string): Observable<any> {
    return this.http.get(this.url+'apirestcap/public/propuesta/filtrocliente/'+tipo+'/null').pipe(
      map(results => results)
    );
  }


  traeramos(): Observable<any> {
    return this.http.get(this.url+'apirestcap/public/personal/listarcombo/05').pipe(
      map(results => results)
    );
  }

  traetipo(ramo): Observable<any> {
    return this.http.get(this.url+'apirestcap/public/producto/ramodependencia/06/'+ramo).pipe(
      map(results => results)
    );
  }

   traeproductos(ramo,tipo): Observable<any> {
    return this.http.get(this.url+'apirestcap/public/propuesta/filtroproducto/'+ramo+'/06'+tipo).pipe(
      map(results => results)
    );
  }



}
