import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import checkedIcon from './fav_checked.png'
import uncheckedIcon from './fav_unchecked.png'
import { useFavoriteContext } from '../../contexts/Favorites';

function Card({ url, cover, title, id }) {
  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some(el=>el.id===id)

  return(
    <section className={styles.card}>
      <Link to={url} 
         rel='noreferrer noopener'
         target='_blank'>
        <img className={styles.cover} src={cover} alt={title} />
      </Link>
      <figure className={styles.icon}>
        <img 
          src={isFavorite ? checkedIcon : uncheckedIcon}
          alt='favorite'
          onClick={()=>addFavorite({id})}  
        />
      </figure>
    </section>
  );  
}

export default Card;