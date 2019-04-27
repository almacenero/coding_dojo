import React from 'react' 
import { Grid } from '@material-ui/core';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})

const Header = () => {
      return <>
            <Grid container css={borde}
            direction="row"
            justify="center"
            alignItems="center">
                  <Grid item>Stand-UP</Grid>
            </Grid>
      </>
}

export default Header