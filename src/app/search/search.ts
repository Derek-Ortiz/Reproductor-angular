import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'

})
export class Search {

  buscado : string = ""

  constructor(private router: Router) {}

  getbuscado(): string{
    return this.buscado;
  }

  onSearch(): void {
    if (this.buscado.trim()) {
      this.router.navigate(['/search'], { 
        queryParams: { q: this.buscado } 
      });
    }
  }

  
}
