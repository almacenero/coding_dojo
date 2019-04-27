import React from 'react';
import Home from './Components/Pages/Home'
import Header from './Components/Pages/header'
import PanelInvitado from './Components/Invitado/PanelInvitado'
import { BrowserRouter as Router, Route,} from 'react-router-dom'


  function App() {
   return <>
   <Router>
      <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/invitado" component={PanelInvitado} />
   </Router>
    
   </>
 } 

export default App;
