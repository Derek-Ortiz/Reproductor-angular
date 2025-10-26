import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {
    
    constructor(
    private _http:HttpClient
    ){}

    getSearchItems(buscado: string): Observable<any>{
        console.log('Buscando:', buscado);
        
        return this._http.get<any>(
          `${environment.API_URL}search?q=${encodeURIComponent(buscado)}&type=album,artist,track&limit=10`
        ).pipe(
          tap(response => console.log('Respuesta de búsqueda:', response)),
          map(apiresponse => {
            return apiresponse;
          })
        )
    }
}