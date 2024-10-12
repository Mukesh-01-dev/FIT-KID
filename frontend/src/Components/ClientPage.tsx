import { Add, ArrowBack } from '@mui/icons-material'
import { Box, Button, createTheme, Divider, Stack, ThemeProvider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Clients from './Clients'
import ClientQuiestion from './ClientQuiestion'


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
        <ClientQuiestion />
        <Divider sx={{borderColor: "black"}} />
        <Clients /> 
      </Box>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default DietPlanner
