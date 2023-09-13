import Book from '../Books';
import styles from './SearchResult.module.css'
import books from '../../json/db.json'
import { useState } from 'react';

const searchForBook = (books, inputText)=>{
  return books.filter((book)=>{
     const text = inputText.toLowerCase()
     return book.title.toLowerCase().includes(text) ||
            book.category.toLowerCase().includes(text) ||
            book.author.toLowerCase().includes(text)
    })
}

function SearchResult(book){

  const [getSearchText, setSearchText] = useState("")
  const bookFound = searchForBook(books, getSearchText)

  return(
    <section className={ styles.search }>
      <input
          id='searchField'
          type='search'
          placeholder="Searching for..."
          value={ getSearchText }
          onChange={e=>setSearchText(e.target.value)}
        />
        <h2>
          {`${bookFound.length} books found.`}
        </h2>
        <Book
         books={ bookFound }
         emptyHeading={ `No books founded for '${getSearchText}'.` }
        />
    </section>
  );
}

export default SearchResult