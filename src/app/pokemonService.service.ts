import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Pokemon {
  count: number;
  next: string;
  previous: string;
  result: Result[]
}
interface Result {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
}
)
export class PokemonService {


  constructor(private http: HttpClient) {}

  getPokemonList(limit, offset): Observable<any> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  getPokemonDetails(name): Observable<any> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}