import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
import Products from './Products';

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
