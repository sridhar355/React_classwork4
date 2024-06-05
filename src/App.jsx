// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import quotes from './quotes.js'
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  

  return (
    <>
            <Navbar />
        {quotes.map((item, index) => {
          return <Card key={index} quote={item.quote} author={item.author}/>;
        })}
      <Footer/>
    </>
  )
}

export default App
