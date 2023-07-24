
import './App.css';

import {Navbar, Header, Features, Download, Subscribe, Faq, Question, Footer,UI} from "./components"

function App() {
  return (
    <main >
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Faq />
      <Question />
      <Subscribe />
      
      <Footer />

    </main>
  );
}

export default App;
