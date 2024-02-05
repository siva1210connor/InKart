import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import Home from './Home';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Redux/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const Entrypoint = () => {
  useEffect(() => {
    console.log('In UseEffect');
  }, []);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Entrypoint;
