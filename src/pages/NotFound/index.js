import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import error404 from './404.jpeg'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <container className={styles.container}>
          <img src={error404} alt='Page Not Found' />
          <span>Sorry for inconvenience!</span>
          <p>Please check url path or return to
            <a href='/'> Home</a>
          </p>
        </container>
      </Container>
      <Footer />
    </>
  );
}

export default NotFound;