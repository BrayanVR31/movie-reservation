import { Component, input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {
  currentClasses: Record<string, boolean> = {
    movie: true,
    card: true
  };

  movie = input.required<Movie>();
}
