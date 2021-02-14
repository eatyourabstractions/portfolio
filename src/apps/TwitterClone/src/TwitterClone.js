import React from 'react';
import App from './App';
import {CurrentUserProvider} from './components/CurrentUserContext'



function TwitterClone() {
  return (
    <>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
    </>
  )
}

export default TwitterClone

