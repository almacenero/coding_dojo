import React from 'react' 
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Salas from './../Salas'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})

const Home = () => {
      return <>
            <Grid container css={borde}
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={10} css={[borde, {borderColor: 'red'}]}>
                  <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                        <Button variant="contained" color="primary" >
                              Crear Sala
                        </Button>
                  </Grid>
            </Grid>
            <Grid item xs={2} css={[borde, {borderColor: 'yellow'}]}>
                  <Salas />
            </Grid>
            </Grid>
      </>
}

export default Home