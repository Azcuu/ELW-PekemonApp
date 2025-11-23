import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) { }

  goPokedex() {
    this.router.navigate(['/pokedex']); // cambia a la ruta real de la Pokédex
  }

  goPokedle() {
    this.router.navigate(['/pokedle']); // cambia a la ruta real de Pokedle
  }

  goTeams() {
    this.router.navigate(['/teams']); // cambia a la ruta real de Teams
  }
}
