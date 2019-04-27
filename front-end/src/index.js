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
import {InvitadosProvider} from './Context/InvitadosContext'
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});



ReactDOM.render(
      <InvitadosProvider>
            <VisibilidadProvider>
                  <ApolloProvider client={client}>
                        <App />
                  </ApolloProvider>  
            </VisibilidadProvider>
      </InvitadosProvider>
      
      
, document.getElementById('root'));


serviceWorker.unregister();
