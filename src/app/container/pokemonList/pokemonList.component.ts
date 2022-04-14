import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../pokemonService.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemonList.component.html',
    styleUrls: ['./pokemonList.component.css']
  })
  export class PokemonListComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    pokemonList : [];
    offset = 0;
    length: number;
    initialLength: number;
    pageSize = 10;
    pageIndex =0
    pageSizeOptions = [5, 10, 25];
    searchItem: string;
    
    constructor ( private pokemonService: PokemonService) {
      this.pokemonService.getPokemonList(this.initialLength, 0).subscribe(
        res => {
          this.initialLength = res.count
        }
      )
    }
  
    ngOnInit() {
      this.getPokemons();
    }
  
    getPokemons() {
      this.pokemonService.getPokemonList(this.pageSize, this.offset).subscribe(
        res => {
          this.pokemonList = res.results;
          this.pokemonService.getPokemonList(this.initialLength, 0).subscribe(
            res => {
              this.length = res.count
            }
          )
        },
        (error) => { console.log(error); });
    }
  
    getPokemonsByName(searchItem) {
  
      this.pokemonService.getPokemonList(this.initialLength, 0).subscribe(
        res => {
          this.length = res.results.filter(x => x.name.toLowerCase().startsWith(searchItem.toLowerCase())).length;
          this.length > this.offset ? 
          this.pokemonService.getPokemonList(this.initialLength, 0).subscribe(
            res => {
  
              let beginIndex = this.paginator.pageIndex ==0 ? 0 : this.offset;
              let endIndex = beginIndex == 0? this.paginator.pageSize : this.offset + this.paginator.pageSize;
              this.pokemonList= res.results.filter(x => x.name.toLowerCase().startsWith(searchItem.toLowerCase())).slice(beginIndex, endIndex)
            }
          ) :
          this.pokemonService.getPokemonList(this.initialLength, 0).subscribe(
            res => {
              this.pokemonList= res.results.filter(x => x.name.toLowerCase().startsWith(searchItem.toLowerCase()))
            }
          )        
          
      },
        (error) => { console.log(error); });
    }
  
    handlePageEvent(event: PageEvent) {
      this.length = event.length;
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.offset = event.pageIndex * event.pageSize;
      !this.searchItem ? this.getPokemons(): this.getPokemonsByName(this.searchItem);
    }
  
    handleSearchEvent(searchItem: string): void {
      this.searchItem = searchItem;
      this.paginator.pageIndex = 0
      this.paginator.pageSize = 10;
      this.offset = this.paginator.pageIndex * this.paginator.pageSize;
      !this.searchItem ? this.getPokemons() :
      this.getPokemonsByName(this.searchItem);
    }
  }
  