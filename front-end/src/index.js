import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Apollo Client Config
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//My Context
import {VisibilidadProvider} from './Context/VisibilidadContext'
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});



ReactDOM.render(
      <VisibilidadProvider>
            <ApolloProvider client={client}>
                  <App />
            </ApolloProvider>  
      </VisibilidadProvider>
      
, document.getElementById('root'));


serviceWorker.unregister();
