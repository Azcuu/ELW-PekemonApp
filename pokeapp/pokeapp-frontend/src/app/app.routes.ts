import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./pokedex/pokedex').then(m => m.Pokedex),
    title: 'Pokédex'
  },
  {
    path: 'pokedex/:id',
    loadComponent: () => import('./pokemon-details/pokemon-details').then(m => m.PokemonDetails),
    title: 'Detalles Pokémon'
  },
];
