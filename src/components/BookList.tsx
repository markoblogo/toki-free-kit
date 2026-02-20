'use client';

import BookSection from './BookSection';
import { books } from '@/data/books';

export default function BookList({ dict }: { dict: any }) {
  return (
    <div id="collection">
      {books.map((book) => (
        <BookSection key={book.id} book={book} dict={dict} isLast={false} />
      ))}
    </div>
  );
}
