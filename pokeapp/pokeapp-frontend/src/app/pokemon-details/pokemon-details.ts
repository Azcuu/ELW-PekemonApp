import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeappService } from '../pokeapp-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  imports: [CommonModule],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css',
})

export class PokemonDetails implements OnInit {

  pokemon: any;
  loading = true;

  constructor(private route: ActivatedRoute, private pokeappService: PokeappService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.pokeappService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
      this.loading = false;
    });
  }
}
