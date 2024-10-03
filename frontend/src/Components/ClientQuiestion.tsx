import { Close, Share } from "@mui/icons-material"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
// import { useState } from "react"


const ClientQuiestion = () => {

  return (
    <Box sx={{marginBottom: "25px", display: "block"}}>
      <Divider sx={{borderColor: "black"}} />
        <Box>
          <Stack direction="row">
            <Box sx={{border: 1, borderColor: "black", borderRadius: "4px", bgcolor: "white", width: "340px", marginLeft: "25px", marginTop: "5px", paddingY: "2px"}}>
              <Typography variant='h4' sx={{color: "black", fontWeight: "500",textAlign: "center"}}>Requirements Sheet</Typography>
            </Box>
            <Button variant='contained' sx={{bgcolor: "black", height: "40px", marginLeft: "15px", marginTop: "7px"}}>
              <Share sx={{marginRight: "4px"}} />
              Send Requirement Link
            </Button>
            <Button sx={{position: "absolute", right: "0", marginRight: "35px", height: "50px"}} >
              <Close sx={{ fontSize: "40px", bgcolor: "black", width: "40px"}} />
            </Button>
          </Stack>
          <Box sx={{bgcolor:"white", width: "95%", marginX: "auto", height: "fill", marginTop: "10px", borderRadius: "5px"}}>
            Hi
          </Box>
        </Box>
    </Box>
  )
}

export default ClientQuiestion
