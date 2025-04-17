import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BookList from '../components/BookList';

export default function Home({ books }) {
  return (
    <>
      <Header />
      <Hero />
      <BookList books={books} />
      <Footer />
    </>
  );
}
