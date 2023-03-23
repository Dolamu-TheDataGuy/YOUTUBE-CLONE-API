import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path = '/'>
              <div className='app_main'>
                <SideBar />
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
      </Router>   
    </div>
  );
}

export default App;
