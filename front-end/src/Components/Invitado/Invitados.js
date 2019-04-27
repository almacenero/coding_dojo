import React from 'react';
import { Query, Mutation } from "react-apollo";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid ,Table,TableBody,TableCell,TableHead,TableRow,} from '@material-ui/core';
import { gql } from "apollo-boost";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})

export const INVITADOS = gql`
 query AllInvitados{
            allInvitados{
         _id
         name
         mail
       }
     }
 `;

 export const DELETE_INVITADOS = gql`
 mutation DeleteInvitado($_id: String){
            deleteInvitado(_id: $_id){
         _id
         name
         mail
       }
     }
 `;

const Invitados = () => {
      return <>
      <Grid container css={borde}
      direction="row"
      justify="center"
      alignItems="center">
            <div>Mis Invitados</div>
      </Grid>

      <Query query={INVITADOS} pollInterval={500}>
      {({data, loading, error})=>{
                  if (loading) return "Loading...."
                  if (error) return `Error!: ${error}`
                  return    <Table  >
                  <TableHead >
                        <TableRow >
                              <TableCell>Nombre</TableCell>
                              <TableCell>Correo</TableCell> 
                        </TableRow>        
                  </TableHead>
                        <TableBody >
                              {data.allInvitados.map((inv, key)=>{
                                    return(
                                          <TableRow key={key}>
                                                <TableCell>{inv.name}</TableCell>
                                                <TableCell>{inv.mail}</TableCell>
                                                <Mutation mutation={DELETE_INVITADOS}>
                                                {( deleteInvitado,{data,loading,error})=>{
                                                      if (loading) return "Loading...."
                                                      if (error) return `Error!: ${error}`
                                                      return <IconButton  aria-label="Delete" onClick={()=>{
                                                            deleteInvitado({
                                                                  variables: {
                                                                        _id: inv._id
                                                            }})
                                                      }}>
                                                      <DeleteIcon />
                                                </IconButton>
                                                }}
                                                </Mutation>
                                          </TableRow>
                                    )
                              })}
                        </TableBody>
                  </Table>      

      }}
      </Query>
      </>
}

export default Invitados