import React from 'react';
import { Grid } from '@material-ui/core';
import Invitados from './Invitados'
import CrearInvitado from './CrearInvitado'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})

const PanelInvitado = () => {
      return <>
      <Grid container css={borde}>
            <Grid item css={borde} xs={7}>
                  <CrearInvitado />
            </Grid>
           <Grid item css={borde} xs={5}>  
                  <Invitados />
           </Grid>
      </Grid>
            
      </>
}

export default PanelInvitado