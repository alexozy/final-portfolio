import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
// create a function to 
  return (
    <div>

      <Nav/>

      <main>
        <About />
      <Portfolio />
      <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
