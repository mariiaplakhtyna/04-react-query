import { useState, type ComponentType } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReactPaginateImport, { type ReactPaginateProps } from 'react-paginate';
import { fetchMovies } from '../../services/movieService';
import css from './App.module.css';

const ReactPaginate =
  (ReactPaginateImport as unknown as { default?: ComponentType<ReactPaginateProps> })
    .default ??
  (ReactPaginateImport as unknown as ComponentType<ReactPaginateProps>);


export default function App() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: query !== '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQuery(inputValue);
    setPage(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search movies..."
        />

        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}

      {isError && <p>Error!</p>}

      <ul>
        {data?.results.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>

      {data && data.total_pages > 1 && (
        <ReactPaginate
          pageCount={data.total_pages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel=">"
          previousLabel="<"
        />
      )}
    </div>
  );
}
