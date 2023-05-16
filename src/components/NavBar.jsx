import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
         <AppBar color="primary" >
            <Toolbar>
                <Typography variant='h2' color={'black'} align="left" sx={{flexGrow:1}} >WELCOME</Typography>
                <Button><Link to={'/'} style={{color:'black'}}>HOME</Link></Button>
                <Button><Link to={'/add'}style={{color:'black'}}>BLOG LINK</Link>li</Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar