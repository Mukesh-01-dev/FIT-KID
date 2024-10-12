import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 , marginTop: "20px", marginX: "20px"}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Item >
                <Stack direction="row" sx={{justifyContent: "space-between"}}>
                    <PersonIcon sx={{bgcolor: "black", fontSize: "100px", borderRadius: "50%"}} />
                    <Box sx={{marginTop: "12px", marginRight: "5px"}}>
                        <Typography sx={{color: "black", marginRight: "20px"}}>Liya - 23yrs F</Typography>
                        <Typography sx={{color: "black", marginLeft: "10px"}}>Workout - Sedentary</Typography>
                        <Typography sx={{color: "black", marginRight: "42px"}}>Vegetarian</Typography>
                    </Box>
                    <Stack sx={{marginLeft: "15px"}}>
                        <Button variant="contained" size='small' sx={{fontSize: "8px"}} >
                            <InfoIcon sx={{fontSize: "15px", marginRight: "5px"}} />
                            View all details
                        </Button>
                        <Typography variant='body2' sx={{fontSize: "12px", marginTop: "16px", color: "black"}}>Wt: 68Kg | Ht: 5'9 ft</Typography>
                        <Button variant="contained" size='small' sx={{fontSize: "8px", bgcolor: "black", marginTop: "12px"}}>
                            <EditIcon sx={{fontSize: "15px", marginRight: "5px"}} />
                            Edit Diet plan
                        </Button>
                    </Stack>
                </Stack>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}