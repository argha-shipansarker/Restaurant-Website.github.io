import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent"
import myStore from "./redux/store";
import { Provider } from "react-redux"


function App() {
  // console.log("App.js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <MainComponent />
      </Provider>
    </div>
  );
}

export default App;
