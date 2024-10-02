import { Button, Typography } from '@mui/material'
import Google from '../assets/Google.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase';

function SignInwithGoogle() {
    function googleLogin() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(
            async (result) => {
                console.log(result);
            }
        )
    }
  return (
    <>
    <Button onClick={googleLogin}  variant="contained" sx={{paddingY: "12px", paddingX: "45px", borderRadius: "50px", bgcolor: "white", marginTop: "20px"}} type='submit'>
        <img src={Google} alt="google image" height="30px" />
        <Typography variant='body2' sx={{color: "black", marginLeft: "10px"}}>
            Continue with Google
        </Typography>
    </Button>
    </>
  )
}

export default SignInwithGoogle
