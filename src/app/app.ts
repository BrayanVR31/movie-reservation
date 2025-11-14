import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { CollectionMovie } from './collection-movie/collection-movie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieList, CollectionMovie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-reservation');
  description = "A little description";
}
