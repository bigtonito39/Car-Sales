import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {createStore} from "redux";
import {featuresReducer} from "./reducers/featuresReducer";
import {Provider} from "react-redux";




let store = createStore(featuresReducer);

const App = () => {
   

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (

    <Provider store={store}>
 <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
    </Provider>
   
  );
};

export default App;
