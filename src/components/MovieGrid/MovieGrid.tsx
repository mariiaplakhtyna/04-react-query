import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li
          className={css.item}
          key={movie.id}
          onClick={() => onSelect(movie)}
        >
          {movie.poster_path && (
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
}