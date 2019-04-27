import React, {useContext} from 'react' 
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Salas from './../Sala/Salas'
import CrearSala from './../Sala/CrearSala'
import {VisibilidadContext} from './../../Context/VisibilidadContext'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
//import { from } from 'zen-observable';
const borde = css({
      borderStyle: 'solid'
})

const Home = props => {
      const { openForm, hiddenButton,  handleHiddenButton,} = useContext(VisibilidadContext)
      return <>
            <Grid container css={borde}
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Grid item xs={7} css={[borde, {borderColor: 'red'}]}>
                  <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <div hidden={hiddenButton} css={{
                        marginTop: 50
                  }} onClick={()=>handleHiddenButton()}>
                        <Button variant="contained" color="primary" >
                              Crear Sala
                        </Button>

                  </div> 
                        <div hidden={openForm} >
                              <CrearSala />
                        </div>
                  </Grid>
            </Grid>
            <Grid item xs={5} css={[borde, {borderColor: 'yellow'}]}>
                  <Salas />
            </Grid>
            </Grid>
      </>
}

export default Home