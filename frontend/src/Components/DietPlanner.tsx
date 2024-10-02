import { Add, ArrowBack, Close, Share } from '@mui/icons-material'
import { Box, Button, createTheme, Divider, Stack, ThemeProvider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Clients from './Clients'


const theme = createTheme({
  palette: {
    secondary: {
      main: '#253745',
    }

  }
})

const DietPlanner = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{bgcolor: "secondary.main", width: "full", height: 1, paddingTop: "30px", paddingBottom: "30px"}}>
      <Box sx={{bgcolor: "#cfd8dc", width: "95%", height: "1800px", marginX: "auto"}}>
        <Typography variant='h3' sx={{color: "black", fontWeight: "600", textAlign: "center", paddingTop: "3px", bgcolor: "white"}}>
            Diet Planner
        </Typography>
        <Divider sx={{borderColor: "black"}} />
        <Stack direction="row" sx={{marginY: "3px", alignItems: "center", justifyContent: "space-between", marginLeft: "5px"}}>
            <Link to="/">
                <ArrowBack sx={{bgcolor: "black", height: "40px", width: "50px", paddingX: "5px", borderRadius: "8px", paddingY: "5px"}} />                    
            </Link>
            <Box sx={{marginLeft: "115px"}}>
                <Typography variant='h4' sx={{color: "black", fontWeight: "600", fontSize: "42px"}}>
                    Client Page
                </Typography>
            </Box>
            <Button variant='contained' sx={{bgcolor: "black", height: "40px", marginRight: "5px"}}>
                <Add sx={{paddingRight: "2px"}} />
                Add New Client
            </Button>
        </Stack>
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
            <Button sx={{position: "absolute", right: "0", marginRight: "35px", height: "50px"}}>
              <Close sx={{ fontSize: "40px", bgcolor: "black", width: "40px"}} />
            </Button>
          </Stack>
          <Box sx={{bgcolor:"white", width: "95%", marginX: "auto", height: "fill", marginTop: "10px", borderRadius: "5px"}}>
            Hi
          </Box>
          <Divider sx={{borderColor: "black", marginTop: "10px"}} />
          </Box>
        <Clients />
      </Box>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default DietPlanner
