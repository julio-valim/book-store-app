import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categoryList, filterBookByCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Banner image="two" />
      <Container>
        {categoryList.map((label, index) =>
          <Category label={label} key={label}>
            <Carousel>
              {filterBookByCategory(index).map((book) =>
                <Card
                  url={book.url}
                  cover={book.cover}
                  title={book.title}
                  key={book.id}
                />
              )}
            </Carousel>
          </Category>
        )}
      </Container>
      <Footer />
    </>
  );
}

// const categories = new Set()
// books.map((book) => categories.add(book.category))
// function App() {
//   return (
//     <>
//       <Header />
//       <Banner image="two" />
//       <Container>
//         {categories.forEach((label) => {
//           let book = books.filter((book) => book.category === label);
//           return (<Category label={book.category}>
//             <Card
//               url={book.url}
//               cover={book.cover}
//               title={book.title}
//               key={book.id}
//             />
//           </Category>)
//          })
//         }
//       </Container>
//       <Footer />
//     </>
//   );
// }

export default Home;
