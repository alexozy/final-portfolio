import React from 'react';
// Import Bootstrap and its deafult variables
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Resume from "./components/Portfolio";
import Nav from "./components/Navi";

function App() {
  return (
    <div className="" >
      {Header()}
      {Footer()}
    </div>
  );
}

export default App;
