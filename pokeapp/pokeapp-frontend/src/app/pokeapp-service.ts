import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemon(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
