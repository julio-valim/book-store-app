import styles from './Category.module.css';
import books from '../../json/db.json'

function Category({ label, children}){
  return(
    <section className={styles.category}>
      <h2>{ label }</h2>
      <div>{ children }</div>
    </section>
  );
}

export function filterBookByCategory(index) {
  return books.filter(book => book.category === categoryList[index])
}

const categories = new Set()
books.map((book) => categories.add(book.category))
export const categoryList = [...categories].sort()

export default Category;