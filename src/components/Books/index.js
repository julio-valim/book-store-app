import Card from '../Card';
import styles from './Book.module.css'


function Book({ books }) {
  return (
    <>

      <section className={styles.books}>
        {
          books.map(book => 
            <Card
              url={book.url}
              title={book.title}
              cover={book.cover}
              key={ book.id }
            />
          )
      }
      </section>
    </>
  );
}

export default Book;