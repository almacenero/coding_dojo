import React, { useState, useContext} from 'react'
import {Grid ,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Query, Mutation} from "react-apollo"
import {INVITADOS} from './../Invitado/Invitados'
import {InvitadosContext} from './../../Context/InvitadosContext'
import gql from "graphql-tag";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid',
})
const contenedor = css({
      padding: 10
})
const espacioBajo = css({
      paddingBottom: 10
})
/* export const UPDATE_DIR_CLIENTE = gql`
mutation UpdateDirClient($_id: String, $dir: String){
      updateDirClient(_id: $_id, dir: $dir){
            name
            phone
            mail
      }
}
` */


const styles = {
      root: {
            backgroundColor: 'rgba(0,0,0,0.7)'
          },
      paper: {
            backgroundColor: "transparent",
            "-webkit-box-shadow": "none",
	      "-moz-box-shadow": "none",
	      "box-shadow": "none"
      }
}
const AlertaGestionSala = props =>{
      const {handleAddInvitado} = useContext(InvitadosContext)
      const {open, handleClose, classes, name, ubication} = props
      

      return <Dialog maxWidth={'md'} open={open} BackdropProps={{classes: {root: classes.root}}}
      PaperProps={{
        classes: {
          root: classes.paper
        }
      }}
      onClose={()=>{
            
            handleClose(false)
      }}
      css={{backgroundColor: 'none',}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
       <Grid container  
            direction="column"
            justify="center"
            alignItems="center" 
            wrap="nowrap" 
            css={[contenedor,{
               backgroundColor: 'white',
            }]}>
      <Grid item css={espacioBajo}>Sala: <b>{name}</b></Grid>
      <Grid item css={espacioBajo}>Lugar: <b>{ubication}</b></Grid>
      <Grid item >
      <Query query={INVITADOS} pollInterval={500}>
      {({data, loading, error})=>{
                  if (loading) return "Loading...."
                  if (error) return `Error!: ${error}`
                  return    <Table  >
                  <TableHead >
                        <TableRow >
                              <TableCell>Nombre</TableCell>
                              <TableCell>Correo</TableCell>
                              <TableCell>Invitar</TableCell>
                        </TableRow>        
                  </TableHead>
                        <TableBody >
                              {data.allInvitados.map((inv, key)=>{
                                    return(
                                          <TableRow key={key}>
                                                <TableCell>{inv.name}</TableCell>
                                                <TableCell>{inv.mail}</TableCell>
                                                <TableCell>
                                                <input type="checkbox" name="vehicle1" value="Bike" 
                                                onClick={(e)=>{
                                                      handleAddInvitado(e, inv)
                                                }}/>
                                                </TableCell>
                                          </TableRow>
                                    )
                              })}
                        </TableBody>
                  </Table>      

      }}
      </Query>
      </Grid>
     
     {/*  <Mutation mutation={UPDATE_DIR_CLIENTE}>
      {(updateDirClient, {loading,data,error})=>{
             if (loading) return <div>Cargando...</div> 
            return <form onSubmit={(e)=> {
                  e.preventDefault()
                  updateDirClient({
                        variables: {
                              _id: id,
                              dir: dir,
                             
                        }
                  })
            }}>
            <Grid container>Dirección: </Grid>
            <textarea rows="8" cols="30" css={espacioBajo}
             required 
             name="dir"
             onChange={handleChange}
            ></textarea>
            <Grid container>
                  <button css={{marginTop: 10}}
                  onClick={()=>handleClose(false)} >
                        Agregar
                  </button>
            </Grid>
            </form>
      }}
      </Mutation> */}
      </Grid>
      </Dialog>
}

AlertaGestionSala.propTypes = {
      classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(AlertaGestionSala)