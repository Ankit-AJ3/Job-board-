import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Joblisting from './Components/joblisting'
import PostJob from './Components/jobposting';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/joblisting" element={<Joblisting />} />
              <Route path="/jobposting" element={<PostJob />} />
              <Route path="/Home" element={<Home />} />
               
              
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;