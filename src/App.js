import React from 'react'
import {Provider} from 'react-redux'
import './App.css';
import store from './redux/store';
import Cakecontainer from './components/Cakecontainer'
import IceContainer from './components/iceContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    hi
    {/* <Cakecontainer/>
    <IceContainer/>
<NewCakeContainer/> */}
<UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
