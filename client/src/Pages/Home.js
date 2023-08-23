import '../App.css';
import {Navbar, Header, Features, Products, Subscribe, News, Footer} from "../components/index"
import React from 'react'

const Home = () => {
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
  )
}

export default Home
