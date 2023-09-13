import styles from './Card.module.css'

function Card({ url, cover, title }) {
  return(
    <section className={styles.card}>
      <a href={url} 
         rel='noreferrer noopener'
         target='_blank'>
        <img src={cover} alt={title} />
      </a>
    </section>
  );  
}

export default Card;