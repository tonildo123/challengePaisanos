import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux'
import { Store } from './src/store/redux/reduxLogin/Store';

const App = () => {

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
    
  );
};



export default App;
