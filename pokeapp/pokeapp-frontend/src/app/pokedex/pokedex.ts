import { Component } from '@angular/core';
import { PokeappService } from '../pokeapp-service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  imports: [
    TitleCasePipe,
    CommonModule
  ],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {

  pokemons: any[] = [];
  loading: boolean = true;

  constructor(private pokeappService: PokeappService) {}

  ngOnInit(): void {
    this.pokeappService.getPokemons().subscribe(data => {
      this.pokemons = data.results;
      this.loading = false;
    });
  }
}
