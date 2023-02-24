import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  const [ count, setCount]= useState(0)
  return (
    <div className="App">
      
      <Header data={setCount} count={count}/>
      <Footer count={count}/>
    </div>
  );
}

export default App;
