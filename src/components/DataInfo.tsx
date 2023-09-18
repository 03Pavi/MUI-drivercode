import { Box, Container } from '@mui/material'
import React from 'react'
import { data } from '../config/data'
const DataInfo = () => {
  return (
    <Container
    sx={{ bgcolor: "#EFEFEF", width:"100%",height:"286px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px"}}
  >
<Container
    sx={{ bgcolor: "#EFEFEF", width:"99%",height:"286px"}}

>
<h1 style={{color:"black",fontWeight:"700",fontSize:"16px"}}>Data Information</h1>
<Box style={{display:"flex",gap:"15px",justifyContent:"center",alignItems:"center"}}>
{
    data.map((i,index)=><Box key={index} sx={{width:"157px" , height:"67px",borderRadius:"5px",border:"1px solid black",backgroundColor:"#F7F9FA",padding:"5px"}}>

       <Box sx={{width:"70%"}}>
       <h1 style={{fontSize:"13px",fontWeight:"700",lineHeight:"17.71px"}}>{i.number}</h1>
        <h1 style={{fontSize:"10px",fontWeight:"600"}}>{i.title}</h1>

       </Box>
    </Box>)
}
</Box>
</Container>
  </Container>
  )
}

export default DataInfo
