import React, {useState, useContext} from 'react' 
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {VisibilidadContext} from './../../Context/VisibilidadContext'
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
}) 

const formatForm = css({
      padding: 10,
      borderRadius: 10
},borde)

export const CREAR_SALA = gql`
mutation CreateSala($name: String, $ubication: String){
      createSala(name: $name, ubication: $ubication){
            name
            ubication
            date
      }
}
`


const CrearSala = () =>{
      const {handleOpenForm} = useContext(VisibilidadContext)

      const [nameInput, setnameInput] = useState('Mi sala')
      const [ubicationInput, setubitacionInput] = useState('Quito')

      const handleChange = (e) =>{
            const {value, name} = e.target
            if(name === "name"){setnameInput(value)}
            if(name === "ubication"){setubitacionInput(value)}
      }
      return <>
      <Mutation mutation={CREAR_SALA}>
      {(createSala, {data,loading, error})=>{
             if (loading) return "Loading...."
             if (error) return `Error!: ${error}`
             return <form css={formatForm} onSubmit={(e)=>{
                  e.preventDefault()
                  createSala({
                        variables: {
                              name: nameInput,
                              ubication: ubicationInput
                        }})
                  setnameInput('')
                  setubitacionInput('')      
             }}>
                        <Grid container 
                  direction="row"
                  justify="center"
                  alignItems="center">
                        <div><i><b>{nameInput}</b></i></div>
                  </Grid>
                  <Grid container >
                        <div>Nombre:</div>
                  </Grid>
                  <Grid container >
                        <input  
                        required 
                        name="name" 
                        placeholder={nameInput}
                        onChange={handleChange}>
                        </input>
                  </Grid>
                  <Grid container >
                        <div>Lugar:</div>
                  </Grid>
                  <Grid container >
                        <textarea required 
                        name="ubication" 
                        rows="5" cols="22"
                        placeholder={ubicationInput}
                        onChange={handleChange}>
                        </textarea>
                  </Grid>
                  <Grid container 
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <div css={{
                        marginTop: 10
                  }}>
                  <Button variant="contained" color="primary"  type='submit'>
                                    Crear
                  </Button>
                  <Button variant="contained" color="primary" onClick={()=>{handleOpenForm()}}>
                                    Cerrar
                  </Button>
                  </div>
                  
                  </Grid>
            </form>
      }}
      </Mutation>
      </>
}

export default CrearSala