export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
overview: string;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}