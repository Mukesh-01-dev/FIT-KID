import { useState } from 'react'
import { Box, TextField, Typography } from "@mui/material"
import { createTheme, ThemeProvider, Button } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase"
import SignInwithGoogle from './SignInwithGoogle'
import { Link } from 'react-router-dom'


const theme = createTheme({
  palette: {
    secondary: {
      main: '#253745'
    }
  }
})



function SignUp() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordRepeat, setPasswordRepeat] = useState<string>("");

    const handleLogin = async (e: any) => {
      e.preventDefault();
      try{
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        console.log("User registered");
      } catch (error){
        console.log(error);
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{height: "750px", bgcolor: "secondary.main", paddingTop: "40px"}}>
        <Box component="form" sx={{bgcolor: "white", width: "500px", marginX: "auto", height: "650px", borderRadius: "10px", textAlign: "center"}}>
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
          type='email'
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
          <TextField 
          label="Enter password again" 
          sx={{width: "300px", marginTop: "20px", marginBottom: "5px"}} 
          type="password" 
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          /> 
          <br />

          <Button  variant="contained" sx={{paddingY: "15px", paddingX: "125px", borderRadius: "50px", bgcolor: "black", marginTop: "20px"}} onClick={handleLogin}>Sign Up</Button>
          <Typography variant="body2" sx={{color: "black", paddingTop: "10px"}}>
            or sign up with
          </Typography>
          <SignInwithGoogle /><br />
          <Typography variant="body1" sx={{color: "black", marginTop: "20px"}}>
            Already have an account? 
          </Typography>
          <Link to="../login">
            <Typography variant="body1" sx={{color: "black", textDecoration: "underline", marginLeft: "5px"}}>Login</Typography> <br />
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default SignUp
