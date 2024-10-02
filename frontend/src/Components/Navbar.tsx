import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import ServicesButton from './ServicesButton';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#06141B'
    }
  }
})

function ResponsiveAppBar() {

  return (
    <ThemeProvider theme={theme}>
        <AppBar sx={{bgcolor: "secondary.main"}} position='static' >
          <Toolbar>
          <Typography variant="h5" sx={{fontWeight: "600", border: 1, borderColor: "white", paddingX: "6px", paddingY: "2px", marginRight: "10px", marginLeft: "3px"}}>FK</Typography>
            <Typography variant="h5"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}>Fitt Kid</Typography>
            <Stack direction="row" spacing={5}>
              <Link to="/"><Button color='inherit'>Home</Button></Link>
              <ServicesButton />
              <Button color='inherit'>About</Button>
              <Stack direction="row">
                <Link to="signup"><Button color='inherit' sx={{bgcolor: "blue"}}>Sign up</Button></Link>
                <Typography variant='body2' sx={{marginTop: "8px", marginX: "10px"}}>or</Typography>
                <Link to="login"><Button color='inherit' sx={{bgcolor: "blue"}}>Log in</Button></Link>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
