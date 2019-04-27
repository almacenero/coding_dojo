import React, {useState} from 'react' 
import { Grid } from '@material-ui/core';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AlertaGestionSala from './../Alertas/AlertaGestionSala'

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
    const [open, setopen] = useState(false)
    const [nameTemp, setnameTemp] = useState('')
    const [ubTemp, setubTemp] = useState('')

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
                  <Button variant="contained" color="primary"  type='submit'
                  onClick={()=>{
                    setopen(true)
                    setnameTemp(sala.name)
                    setubTemp(sala.ubication)
                  }}>
                      Gestionar
                  </Button>
                  </li>)
                }}
                </Query>
          </ul>
          <AlertaGestionSala 
          open={open}
          handleClose={setopen}
          name={nameTemp}
          ubication={ubTemp}
          />
      </>
}

export default Salas