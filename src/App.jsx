import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Route path='/carrinho' component={CartScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
