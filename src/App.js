import React from 'react';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import About from "./components/About"

function App(){
// create a function to 
  return (
    <div>

      <Nav/>

      <main>
        <About />
      <Portfolio />

      </main>
      <Footer/>
    </div>
  );
}

export default App;
