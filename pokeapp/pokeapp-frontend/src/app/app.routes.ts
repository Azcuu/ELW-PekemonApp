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
    path: 'pokedle',
    loadComponent: () => import('./pokedle/pokedle').then(m => m.Pokedle),
    title: 'Pokedle'
  },
  {
    path: 'teams',
    loadComponent: () => import('./teams/teams').then(m => m.Teams),
    title: 'Teams'
  }
];