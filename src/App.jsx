import { useState } from 'react';
import Home from './components/home';
import Header from './components/header';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Home/>
      <Home/>
      <Home/>
    </>
  )
}

export default App
