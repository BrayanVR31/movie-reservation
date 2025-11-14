import { Component } from '@angular/core';
import { Movie } from '../Movie';
import { MovieItem } from '../movie-item/movie-item';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  currentClasses: Record<string, boolean> = {
    movie: true,
    card: true
  }

  showList: boolean = false;

  toggleList() {
    this.showList = !this.showList;
  }

  isOdd: boolean = true;

  movies: Movie[] = [
    {
      id: 1,
      title: "Avengers",
      description: "description",
      year: 2010
    },
    {
      id: 2,
      title: "Avengers 2",
      description: "description",
      year: 2015
    },
    {
      id: 3,
      title: "Avengers 3",
      description: "description",
      year: 2020
    },
    {
      id: 4,
      title: "Avengers 4",
      description: "description",
      year: 2023
    }
  ];
}
