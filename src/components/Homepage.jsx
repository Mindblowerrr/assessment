import { TableContainer,Table,TableHead,TableRow,TableCell,TableBody, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {

    var[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
        console.log(response.data);
        setData(response.data)
    })
    },[])

  return (
    <div>
        <br /><br /><br /><br /><Typography variant='h3' color="#055275">ID & TITLE INFORMATION</Typography>
        <TableContainer >
            <Table sx={{maxWidth:650}} align="center">
                <TableHead>
                    <TableRow>                    
                        <TableCell ><Typography variant='h4' color="primary">ID</Typography></TableCell>
                        <TableCell ><Typography variant='h4' color="primary">TITLE</Typography></TableCell>               
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((value,index)=>{
                            return(
                                <TableRow key={index}>                           
                                    <TableCell>{value.id}</TableCell>
                                    <TableCell>{value.title}</TableCell>
                                
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Homepage