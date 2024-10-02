import { Search } from "@mui/icons-material"
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import ClientCard from "./ClientCard"


const Clients = () => {
  return (
    <Box sx={{marginTop: "30px"}}>
        <Typography variant='h4' sx={{color: "black", textAlign: "center", fontWeight: "500", marginBottom: "10px"}}>Present Clients</Typography>
        <Stack direction="row" sx={{justifyContent: "center"}}>
            <TextField id="filled-basic" label="Search" variant="filled" size="small" />
            <Button variant="contained" sx={{bgcolor: "black"}}><Search /></Button>
        </Stack>
        <ClientCard />
    </Box>
  )
}

export default Clients
