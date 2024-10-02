import { useState } from 'react'
import Google from '../assets/Google.png'
import { Box, TextField, Typography } from "@mui/material"
import { createTheme, ThemeProvider, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#253745'
    }
  }
})



function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (e: any) => {
      e.preventDefault();
    }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{height: "700px", bgcolor: "secondary.main", paddingTop: "40px"}}>
        <Box component="form" onSubmit={handleLogin}	 sx={{bgcolor: "white", width: "500px", marginX: "auto", height: "600px", borderRadius: "10px", textAlign: "center"}}>
          <Typography variant="h4" sx={{color: "black", fontWeight: "700", paddingTop: "30px"}}>
            FITT KID
          </Typography>
          <Typography variant="h5" sx={{color: "black", fontWeight: "700", paddingTop: "10px"}}>
            Small Steps, Big results
          </Typography>
          <TextField 
          label="Enter email" 
          sx={{width: "300px", marginTop: "30px"}} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          /> 
          <br />
          <TextField 
          label="Enter password" 
          sx={{width: "300px", marginTop: "30px", marginBottom: "5px"}} 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
          <br />
          <Typography variant="body1" component="a" sx={{color: "black", marginLeft: "170px", textDecoration: "underline"}} href="#">Forgot Password?</Typography> <br />
          <Button  variant="contained" sx={{paddingY: "15px", paddingX: "125px", borderRadius: "50px", bgcolor: "black", marginTop: "20px"}}>Sign In</Button>
          <Typography variant="body2" sx={{color: "black", paddingTop: "10px"}}>
            or sign in with
          </Typography>
          <Button  variant="contained" sx={{paddingY: "12px", paddingX: "45px", borderRadius: "50px", bgcolor: "white", marginTop: "20px"}} type='submit'>
            <img src={Google} alt="google image" height="30px" />
            <Typography variant='body2' sx={{color: "black", marginLeft: "10px"}}>
              Continue with Google
            </Typography>
          </Button> <br />
          <Typography variant="body1" sx={{color: "black", marginTop: "20px"}}>
            Don't have an Account? 
          </Typography>
          <Link to="../signup">
            <Typography variant="body1" sx={{color: "black", textDecoration: "underline", marginLeft: "5px"}}>Sign Up</Typography> <br />
          </Link>
        </Box>
      </Box>
    </ThemeProvider>

  )
}

export default Login
