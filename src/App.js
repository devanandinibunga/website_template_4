import React from 'react';
import './App.css';
import { BookHeader } from './components/BookHeader/BookHeader';
import { BookLandingBody } from './components/BookLandingBody/BookLandingBody';
import { BookPageFooter } from './components/BookPageFooter/BookPageFooter';


function App() {
  return (
    <>
      <BookHeader/>
      <BookLandingBody/>
      <BookPageFooter/>
    </>
  );
}

export default App;
