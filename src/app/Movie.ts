export interface Movie {
  id: number;
  title: string;
  coverImage: string;
  ageRating: string;
  duration: number;
  releaseDate: Date | string;
  isPreSale: boolean;
  description?: string;
  year?: number;
}
