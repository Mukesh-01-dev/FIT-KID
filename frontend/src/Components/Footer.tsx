import { createTheme, ThemeProvider } from '@mui/material'
import { Box, Typography, Stack} from "@mui/material"

const theme = createTheme({
    palette: {
      secondary: {
        main: '#253745',
      }
  
    }
  })


const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{paddingTop: "40px", bgcolor: "secondary.main", height: "500px", borderTop: 1, borderColor: "white"}}>
            <Stack sx={{borderColor: "white", paddingLeft: "40px", paddingTop: "50px"}} direction="row">
                <Box sx={{width: "50%"}}>
                    <Stack direction="row">
                        <Typography variant="h2" sx={{fontWeight: "600", border: 3, borderColor: "white", height: "80px", marginTop: "20px", paddingX: "10px", marginRight: "30px", marginLeft: "30px"}}>FK</Typography>
                        <Typography variant="h1" sx={{fontWeight: "600"}}>Fitt Kid</Typography>
                    </Stack>
                    <Stack direction="row" sx={{marginLeft: "80px", marginTop: "40px"}}>
                        <Typography variant='h6' sx={{}}>Menu</Typography>
                        <Typography variant='h6' sx={{marginRight: "50px", marginLeft: "50px"}}>Our Story</Typography>
                        <Typography variant='h6' sx={{}}>About</Typography>
                    </Stack>
                    <Stack direction="row" sx={{marginLeft: "50px", marginTop: "40px"}}>
                        <Typography variant='h6' sx={{}}>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</Typography>
                    </Stack>
                </Box>
                <Box sx={{width: "50%", marginRight: "80px", textAlign: "right", marginTop: "110px"}}>
                    <Typography variant='h6'>848 King Street, Mesa, AZ 85201, Boston, USA</Typography>
                    <Typography variant='h6' sx={{marginTop: "20px"}}>FITKID000@GMAIL.com</Typography>
                    <Stack direction="row" sx={{marginRight: "60px", marginTop: "20px", marginLeft: "370px"}}>
                        <Typography variant='h6'>Logo</Typography>
                        <Typography variant='h6' sx={{marginRight: "50px", marginLeft: "50px"}}>Logo</Typography>
                        <Typography variant='h6'>Logo</Typography>
                        <Typography variant='h6' sx={{marginRight: "50px", marginLeft: "50px"}}>Logo</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Footer
