// src/App.js

import Header from './components/Header';
import HomePage from './components/HomePage';
import Bottom from './components/Bottom';
import { LoginProvider } from './Context/LoginContext';
import './App.css';

const App = () => (
  <LoginProvider>
    <Header />
    <main>
      <HomePage />
    </main>
    <Bottom />
  </LoginProvider>
);

export default App;