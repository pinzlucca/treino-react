import { useState } from 'react';
import Home from './components/home';
import Header from './components/header';
import Body from './components/body';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <Home/>
      <Body/>
    </main>

  )
}

export default App
