import React from 'react'
import Container from "@mui/material/Container";
import DataInfo from "../components/Dashboard/DataInfo";
import LeaveStatus from "../components/Dashboard/LeaveStatus";
import Box from "@mui/material/Box";


const GroupImage='https://i.pinimg.com/originals/7d/f2/6f/7df26fa959d20fa16bf8223205cd949b.gif'

const Department = () => {
  return (
   <>
    <Container maxWidth="lg" sx={{display:"flex",alignItems:"center",justifyContent:'center',marginBottom:"10px"}}>
    <Container maxWidth="lg" sx={{display:"flex"}}>
    <Box
          sx={{ bgcolor: "#F7F9FA", height: "141px", width: "20%",display:"flex",justifyContent:"center",alignItem:"center" }}
        >
          <img src={GroupImage} style={{width:"cover"}} />

        </Box>
        <Box
          sx={{ bgcolor: "#F7F9FA", height: "141px", width: "80%",padding:"10px",boxSizzing:"border-box" }}
        >
<p style={{width:"100%",fontWeight:"300",fontSize:"14px",lineHeight:"19.07px"}}>Welcome Back</p>
<p style={{width:"100%",fontWeight:"500",fontSize:"16px",lineHeight:"21.79px"}}>Pavitar Singh</p>
<p style={{width:"100%",fontWeight:"300",fontSize:"12px",lineHeight:"16.34px"}}>Skip the big Promises and face the Challenges ahead, for the bigger picture <br/>is just ahead</p>

        </Box>

    </Container>
  </Container>
  <Container maxWidth="xl">
      
<DataInfo/>
<LeaveStatus/>

      </Container>
   </>

  )
}

export default Department
