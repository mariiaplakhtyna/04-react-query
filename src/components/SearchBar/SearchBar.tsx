import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get('query') as string;

    if (!topic.trim()) {
      toast.error('Please enter search term!');
      return;
    }

    onSubmit(topic);
  };

  return (
    <header className={css.header}>
      <form action={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}