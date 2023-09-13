// import { useState } from 'react';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Search.module.css'
import SearchResult from '../../components/SearchResult';

function Search() {

  return (
    <>
      <section className={styles.search}></section>
      <Header />
      <Banner image="one" />
      <Container>
        <SearchResult/>
      </Container>
      <Footer />
    </>
  );
}

export default Search;