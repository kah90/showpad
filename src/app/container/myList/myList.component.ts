import { Component } from '@angular/core';
import { ApplicationStateService } from 'src/app/applicationState.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './myList.component.html',
  styleUrls: ['./myList.component.css']
})
export class MyListComponent {
  addedPokemon: string[] = [];
  constructor(private stateService: ApplicationStateService) {
    this.addedPokemon= this.stateService.state.addedPokemon;
  }
}