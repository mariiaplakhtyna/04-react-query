import type { Movie } from '../../types/movie';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}