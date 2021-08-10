import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <BrowserRouter>
      <main>
      <Route path='/' component={HomeScreen} exact />
      </main>
    </BrowserRouter>
  );
}

export default App;
