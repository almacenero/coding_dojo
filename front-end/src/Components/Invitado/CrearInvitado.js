import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import Button from '@material-ui/core/Button';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const formatForm = css({
      padding: 10,
      borderRadius: 10
},borde)

export const CREAR_INVITADO = gql`
mutation CreateInvitado($name: String, $mail: String){
      createInvitado(name: $name, mail: $mail){
            name
            mail
      }
}
`

const CrearInvitado = () => {
      const [nameInput, setnameInput] = useState('JOJO')
      const [mailInput, setmailInput] = useState('JO@gmail.com')
      
      const handleChange = (e) =>{
            const {value, name} = e.target
            if(name === "name"){setnameInput(value)}
            if(name === "mail"){setmailInput(value)}
      }
      return <>
      <Grid container>
            <div>Mi Invitado</div>
      </Grid>
      <Mutation mutation={CREAR_INVITADO}>
      {(createInvitado, {data,loading, error})=>{
             if (loading) return "Loading...."
             if (error) return `Error!: ${error}`
             return <form css={formatForm} onSubmit={(e)=>{
                  e.preventDefault()
                 createInvitado({
                        variables: {
                              name: nameInput,
                              mail: mailInput
                        }})
                  setnameInput('')
                  setmailInput('')      
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
                        <div>Correo:</div>
                  </Grid>
                  <Grid container >
                        <input required 
                        name="mail" 
                        rows="5" cols="22"
                        placeholder={mailInput}
                        onChange={handleChange}>
                        </input>
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
                  </div>
                  
                  </Grid>
            </form>
      }}
      </Mutation>
      </>
}

export default CrearInvitado