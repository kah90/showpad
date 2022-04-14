import { Component } from '@angular/core';
import { ApplicationStateService } from 'src/app/applicationState.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
    catchedPokemon: string[];
    constructor(private stateService: ApplicationStateService) {
      this.catchedPokemon= this.stateService.state.catchedPokemon
    }
}