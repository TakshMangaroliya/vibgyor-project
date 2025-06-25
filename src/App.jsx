import React from 'react';
import './App.css'; // Tailwind CSS imports should be here
import Header from './pages/Header';
import Homepage from './pages/Homepage';
import Footer from './pages/Footer';



function App() {
  return (
    <>
   
      <Header />
      <Homepage/>
      <Footer/>
      
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
     
    </>
  );
}

export default App;
