import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen/CartScreen';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Route path='/' component={CartScreen} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
