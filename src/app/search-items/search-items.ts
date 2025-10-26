import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifySearchService } from '../services/spotify-api/spotify-search-service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search-items',
  standalone: false,
  templateUrl: './search-items.html',
  styleUrl: './search-items.css',
  
  
})


export class SearchItems implements OnInit {

  searchItems$!: Observable<any>;
  searchQuery: string = '';

  constructor(
    private _spotifySearch: SpotifySearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Escuchar cambios en el query param 'q'
    this.searchItems$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.searchQuery = params['q'] || 'Artic';
        console.log('🔍 Buscando:', this.searchQuery);
        return this._spotifySearch.getSearchItems(this.searchQuery);
      })
    );

    // Suscribirse para ver la respuesta en consola
    this.searchItems$.subscribe({
      next: (data) => {
        console.log('✅ Datos recibidos:', data);
        console.log('Albums:', data.albums);
        console.log('Artists:', data.artists);
        console.log('Tracks:', data.tracks);
      },
      error: (err) => {
        console.error('❌ Error:', err);
      }
    });
  }
}
