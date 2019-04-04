import React from 'react';
import Header from '../Header';
import LoginBlock from '../LoginBlock';
import ImageBlock from '../ImageBlock';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <LoginBlock />
        <ImageBlock />
      </div>
    </div>
  )
};

export default App;
