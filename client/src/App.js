
import './App.css';

import {Navbar, Header, Features, Products, Subscribe, News, Footer,UI} from "./components"

function App() {
  return (
    <main >
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Products />
      <News />
      <Subscribe />
      <Footer />

    </main>
  );
}

export default App;
