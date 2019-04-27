import React from 'react' 
import { Grid } from '@material-ui/core';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
}) 

const SALAS = gql`
 query allSalas{
            allSalas{
         _id
         name
       }
     }
 `;


const Salas = () => {
      return <>
          <ul>
                <Query query={SALAS}>
                {({data, loading, error})=>{
                  if (loading) return "Loading...."
                  if (error) return `Error!: ${error}`
                  return  data.allSalas.map((sala, key)=><li>{sala.name}</li>)
                }}
                </Query>
          </ul>
      </>
}

export default Salas