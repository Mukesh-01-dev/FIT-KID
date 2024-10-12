import { Box, Typography, Stack, Button} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material'
import FoodImg from '../assets/food.jpg'

const theme = createTheme({
    palette: {
      secondary: {
        main: '#253745',
      }
  
    }
  })

const Services = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{paddingTop: "40px", bgcolor: "secondary.main", height: "600px", color: "white"}}>
        <Typography variant="h3" sx={{marginBottom: "20px", textAlign: "center", fontWeight: "700"}}>Our Services</Typography>
        <Stack sx={{borderColor: "white",border: 1, height: "450px", width: "95%", marginX: "auto", paddingLeft: "40px", paddingTop: "50px"}} direction="row">
            <Box>
                <Typography variant="h3" sx={{fontWeight: "600"}}>Diet Planner</Typography>
                <Typography variant="h5" sx={{paddingTop: "20px", marginRight: "90px"}}>A personalized Diet Planner, where nutrition meets customization to fit your unique lifestyle and goals. This page is designed to help you craft a diet plan tailored to your specific needs, whether you're an athlete, a busy professional,or someone looking to improve their overall health</Typography>
                <Button  variant="contained" sx={{paddingY: "15px", paddingX: "70px", marginTop: "30px", borderRadius: "50px", bgcolor: "white", color: "black", fontWeight: "700"}}>Explore</Button>
            </Box>
            <Box>
                <img
                src={FoodImg}
                style={{height: "360px", marginRight: "20px"}}
                />
            </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Services
