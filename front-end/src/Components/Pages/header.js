import React from 'react' 
import { Grid } from '@material-ui/core';
import { NavLink,Route,Link,Redirect,withRouter} from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
const borde = css({
      borderStyle: 'solid'
})
const link = css({
      textDecoration: 'none'
})
const Header = () => {
      return <>
            <Grid container css={borde}
            direction="row"
            justify="center"
            alignItems="center">
             <NavLink to="/" css={link} >
                  <Grid item>Stand-UP</Grid>
             </NavLink>
            </Grid>
      </>
}

export default Header