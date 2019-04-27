import React from 'react';
import Home from './Components/Pages/Home'
import Header from './Components/Pages/header'
import { BrowserRouter as Router, Route,} from 'react-router-dom'


  function App() {
   return <>
   <Router>
      <Header />
        <Route exact path="/" component={Home} />
        
   </Router>
    
   </>
 } 

export default App;
