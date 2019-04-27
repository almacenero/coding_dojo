import React from 'react' 
import { Grid } from '@material-ui/core';
import { Query, Mutation } from "react-apollo";

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { gql } from "apollo-boost";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
}) 

export const SALAS = gql`
 query allSalas{
            allSalas{
         _id
         name
         ubication
       }
     }
 `;

export const DELETE_SALA = gql`
 mutation DeleteSala($_id: String){
            deleteSala(_id: $_id){
         _id
         name
         ubication
       }
     }
 `;

const Salas = () => {
      return <>
            <Grid container direction="row"
                  justify="center"
                  alignItems="center">
                  <div><b>Mis Salas</b></div>
            </Grid>
          <ul>
                <Query query={SALAS} pollInterval={500}>
                {({data, loading, error})=>{
                  if (loading) return "Loading...."
                  if (error) return `Error!: ${error}`
                  return  data.allSalas.map((sala, key)=><li>{sala.name} ({sala.ubication})
                  <Mutation mutation={DELETE_SALA}>
                  {( deleteSala,{data,loading,error})=>{
                         if (loading) return "Loading...."
                         if (error) return `Error!: ${error}`
                         return <IconButton  aria-label="Delete" onClick={()=>{
                               deleteSala({
                                    variables: {
                                          _id: sala._id
                              }})
                         }}>
                        <DeleteIcon />
                  </IconButton>
                  }}
                  </Mutation>
                 
                  </li>)
                }}
                </Query>
          </ul>
      </>
}

export default Salas