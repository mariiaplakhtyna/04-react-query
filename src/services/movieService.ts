import axios from 'axios';
import type { Movie } from '../types/movie';
interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const response = await axios.get<MoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page,
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGMyZDFhMTMxMmNkNmFlMTg1OTg2ZDM0N2NlY2FjNCIsIm5iZiI6MTc3ODU5MDc3OS4yNiwic3ViIjoiNmEwMzI0M2JjNTNiNzVmMDEwZTE1NmNlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.u2YFxRZxgGzd6XNK-3CpaupOXxLJUQCQu3OftgMdApg `,
      },
    }
  );

  return response.data;
}