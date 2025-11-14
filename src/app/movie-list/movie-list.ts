import { Component } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  currentClasses: Record<string, boolean> = {
    grid: true,
    "grid-cols-6": true
  }

  showList: boolean = false;

  toggleList() {
    this.showList = !this.showList;
  }

  isOdd: boolean = true;

  movies: Movie[] = [
    {
      id: 1,
      title: "Echoes of Tomorrow",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG-13",
      duration: 124,
      isPreSale: true,
      releaseDate: "2025-03-18"
    },
    {
      id: 2,
      title: "Shadows in the Deep",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "R",
      duration: 98,
      isPreSale: false,
      releaseDate: "2024-11-05"
    },
    {
      id: 3,
      title: "Skybound Adventures",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG",
      duration: 110,
      isPreSale: true,
      releaseDate: "2025-07-22"
    },
    {
      id: 4,
      title: "Neon Nights",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG-13",
      duration: 142,
      isPreSale: false,
      releaseDate: "2023-09-12"
    },
    {
      id: 5,
      title: "Realm of the Aether",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG-13",
      duration: 130,
      isPreSale: true,
      releaseDate: "2026-01-10"
    },
    {
      id: 6,
      title: "The Last Horizon",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG",
      duration: 102,
      isPreSale: false,
      releaseDate: "2024-05-27"
    },
    {
      id: 7,
      title: "Crimson Rebellion",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "R",
      duration: 117,
      isPreSale: true,
      releaseDate: "2025-09-14"
    },
    {
      id: 8,
      title: "Frostbound Kingdom",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG",
      duration: 95,
      isPreSale: false,
      releaseDate: "2023-12-20"
    },
    {
      id: 9,
      title: "Circuit Breaker",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG-13",
      duration: 108,
      isPreSale: true,
      releaseDate: "2025-04-30"
    },
    {
      id: 10,
      title: "Voyage of the Starborn",
      coverImage: "https://zepperoni.wordpress.com/wp-content/uploads/2011/01/avengersfakeposter.jpg?w=584",
      ageRating: "PG",
      duration: 122,
      isPreSale: false,
      releaseDate: "2024-08-09"
    }
  ];
}
