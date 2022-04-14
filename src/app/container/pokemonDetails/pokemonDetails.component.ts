import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationStateService } from 'src/app/applicationState.service';
import { PokemonService } from 'src/app/pokemonService.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.css']
})
export class PokemonDetailsComponent {
    constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private stateService: ApplicationStateService){}
    pokemonMoves = []
    pokemonName: string;
    ngOnInit(): void {
        this.getPokemon();
      }
      
      async getPokemon() {
        this.pokemonName = this.route.snapshot.paramMap.get('name');
        await this.pokemonService.getPokemonDetails(this.pokemonName)
          .subscribe(data => {
              this.pokemonMoves = data.moves.map(x=> x.move.name);
          })
      }

      addPokemon(){
        this.stateService.addPokemonToMyList(this.pokemonName);
      }
      catchPokemon(){
        this.stateService.addCatchedPokemon(this.pokemonName);
      }
}
