import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PokemonListComponent } from './container/pokemonList/pokemonList.component';
import { PokemonDetailsComponent } from './container/pokemonDetails/pokemonDetails.component';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './container/wishlist/wishlist.component';
import { MyListComponent } from './container/myList/myList.component';


const routes: Routes = [
  { path: 'pokemon/:name', component: PokemonDetailsComponent },
  { path: '', component: PokemonListComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'mylist', component: MyListComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    WishlistComponent,
    MyListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
