import { useState } from 'react';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() === '') return;

    onSubmit(value.trim());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search movies..."
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}