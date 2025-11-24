import { HttpClient } from '@angular/common/http';
import { Component, Injectable, signal, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokeapp-service',
  imports: [],
  templateUrl: './pokeapp-service.html',
  styleUrl: './pokeapp-service.css',
})

@Injectable({
  providedIn: 'root'
})

export class PokeappService {

  private apiUrl = 'https://pokeapi.co/api/v2';
  pokemons = signal<any[]>([]);
  loaded = signal(false);

  constructor(private http: HttpClient) {}

  loadallPokemons(): void {
    if (this.loaded()) return;

    this.http.get<{ results: Pokemon[] }>(`${this.apiUrl}/pokemon?limit=151`)
      .subscribe(data => {
        // 1️⃣ preparamos las llamadas a detalle
        const calls = data.results.map((p, i) =>
          this.http.get(`${this.apiUrl}/pokemon/${i + 1}`)
        );

        // 2️⃣ ejecutamos todas las llamadas en paralelo
        forkJoin(calls).subscribe(detailsArray => {
          const all = detailsArray.map((details: any, i) => ({
            id: i + 1,
            name: details.name,
            sprite: details.sprites.front_default,
            types: details.types.map((t: any) => t.type.name),
            abilities: details.abilities.map((a: any) => a.ability.name),
            stats: details.stats.map((s: any) => ({ name: s.stat.name, value: s.base_stat }))
          }));
          this.pokemons.set(all);
          this.loaded.set(true);
        });
      });
  }

  getPokemonById(id: number) {
    return this.pokemons().find(p => p.id === id);
  }

}

