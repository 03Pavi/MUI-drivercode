import { Container } from '@mui/material'
import React from 'react'
import AccessibleTable from './Table'
const LeaveStatus = () => {
  return (
   <>
    <Container>
      <h1 style={{fontWeight:"600",fontSize:"16px"}}>LATEST LEAVE APPLICATION</h1>
      <Container maxWidth="lg" sx={{display:"flex",alignItems:"center",justifyContent:'center',marginBottom:"10px",backgroundColor:""}}>
      <Container maxWidth="lg">
        <AccessibleTable/>
        </Container>
        </Container>
    </Container>
   </>

  )
}

export default LeaveStatus
