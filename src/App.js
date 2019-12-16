import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllPost from './Components/AllPost';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="App">
     
     <Router>
        <switch> 
            <Route exact path='/' component={Login}></Route> 
            <Route exact path='/Register' component={Register}></Route> 
            <Route exact path='/AllPost' component={AllPost}></Route> 
            <Route exact path='/AllPost' component={PostForm}></Route> 
        </switch>
      </Router>
     
    </div>
  );
}

export default App;