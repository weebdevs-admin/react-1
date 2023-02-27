import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
function App() {
  const [counter, setCounter]= useState(0)
  console.log(counter+setCounter);
  return (
    <div className="App">
      
      <Header />
      <Footer />
    </div>
  );
}

export default App;
