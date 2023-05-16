import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
const Form = () => {
  return (
    <div style={{ alignItems:'center', textAlign:'center', }} >
      <br /><br /> <br /><br /> <br /><br /><br /><br /><br /><br />
      < Box style={{ border:' 2px solid #055275', width:"25%" ,height:"60%", padding:1,marginLeft:"35%"}} >
      <Typography variant="h3" color="#055275"></Typography><br />
        <TextField label="Author Name" variant="outlined" color="primary"></TextField><br /><br />
        <TextField label="Blog Name" variant="outlined" color=""></TextField><br /><br />
        <TextField label="Description" variant="outlined" color="primary"></TextField><br /><br />
        <Button variant="contained" color="primary">Submit</Button>
      </Box>
    </div>
  )
}

export default Form