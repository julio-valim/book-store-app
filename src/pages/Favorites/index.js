import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Favorites.module.css'


function Favorites() {
  return (
    <>
      <Header />
      <Banner image='one' />
      <Container>
        <section className={styles.favorites}>
          <h2>My favorite books.</h2>
          Next to read list.
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;