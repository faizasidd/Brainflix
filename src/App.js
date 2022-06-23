import React, { Component } from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import TitleBar from './components/Component/TitleBar/TitleBar';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import UploadPage from './pages/Page/UploadPage';
import HomePage from './pages/Page/HomePage';

class App extends Component {
  
render() {
  return (
    <>
   <div className="App">
   <BrowserRouter>
      <TitleBar image={Mohan} /> 
      <Switch>
        <Route exact path={['/videos', '/']} component={HomePage} />
        <Route path='/upload' component={UploadPage} />
        <Route path='/videos/:id' component={HomePage} />
      </Switch>
      </BrowserRouter>
  </div>
  </>
  );
}
}

export default App;
