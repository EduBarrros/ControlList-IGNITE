import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </>
  )
}

export default App
