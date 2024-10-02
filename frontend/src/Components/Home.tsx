import { Box, Typography, Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#253745',
    }

  }
})

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{textAlign: "center", paddingTop: "100px", bgcolor: "secondary.main", height: "500px", borderBottom: 1, borderColor: "white"}}>
        <Typography variant="h1" sx={{fontWeight: 700, color: "inherit"}}>Fitt Kid</Typography>
        <Typography variant="h4" sx={{paddingBottom: "40px", fontWeight: "600", color: "inherit"}}>Small Steps, Big Results</Typography>
        <Typography variant="body1" sx={{fontWeight: "600", color: "inherit"}}>FittKid - your ultimate fitness companion, designed to empower both trainers and learners on their journey to a healthier, more active lifestyle</Typography>
        <Typography variant="body1" sx={{fontWeight: "600", color: "inherit"}}>FittKid is a comprehensive fitness app that connects users with expert trainers, offers personalized workout and diet plans,</Typography>
        <Typography variant="body1" sx={{fontWeight: "600", color: "inherit", paddingBottom: "50px"}}>and tracks progress to help achieve fitness goals.</Typography>
        <Button  variant="contained" sx={{paddingY: "15px", paddingX: "35px", borderRadius: "50px", bgcolor: "text.secondary"}}>Join Now</Button>
      </Box>
    </ThemeProvider>
  )
}

export default Home
