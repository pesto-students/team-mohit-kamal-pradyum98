import { useMemo } from 'react';

const useBookFilter = (books, searchTerm) => {
    const filteredBooks = useMemo(() => {
        return books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [books, searchTerm]);

    return filteredBooks;
};

export default useBookFilter;
