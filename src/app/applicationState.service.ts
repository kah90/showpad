import { Injectable } from "@angular/core";

export interface State {
    catchedPokemon: string[];
    addedPokemon: string[];
}

@Injectable({
    providedIn: 'root',
})

export class ApplicationStateService {
    state: State = {
      catchedPokemon: [],
      addedPokemon: []
    };

    addCatchedPokemon(pokemonName: string) {
        this.state.catchedPokemon.push(pokemonName);
      };

    addPokemonToMyList(pokemonName: string) {
        this.state.addedPokemon.push(pokemonName);
      };
    }