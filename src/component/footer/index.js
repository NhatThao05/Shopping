import {Box, Grid, ListItemText, Typography, List} from "@mui/material"
import { Colors } from "../../styles/theme"
import CallIcon from '@mui/icons-material/Call';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { Container } from "@mui/system";

export default function Footer() {
 return (
  <Box sx={{background: "#2196F3", color: Colors.light_gray}}>
   <Container fixed>
   <Grid container spacing={2} justifyContent="center">
    <Grid item md={4} lg={3} sx={{marginTop: 4}}>
     <Typography variant="h5" sx={{fontWeight: 'bolder'}}>Help and information</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="h6"><CallIcon sx={{mr: 1}}/>Contact US</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6"><SupportAgentOutlinedIcon sx={{mr: 1}}/>Support Center</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6"><CachedOutlinedIcon sx={{mr: 1}}/>Refund Policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6"><LocalShippingOutlinedIcon sx={{mr: 1}}/>Delivery</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={4} lg={3} sx={{marginTop: 4}}>
     <Typography variant="h5" sx={{fontWeight: 'bolder'}}>Product</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Nutritions</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Apparel & Accessories</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Special diet</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Health & Fitness Goals</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">View catalog</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">A new customer?</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={4} lg={3} sx={{marginTop: 4}}>
     <Typography variant="h5" sx={{fontWeight: 'bolder'}}>Company information</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">About us</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Partner</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Career</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Modern Slavery Statement</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Privacy Policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Quality</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Terms & Conditions</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Commercial Partner</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={6} lg={3} sx={{marginTop: 4}}>
     <Typography variant="h5" sx={{fontWeight: 'bolder'}}>Discount code</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="h6">Get 25% discount</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>  
   </Grid>
   </Container>
  </Box>
 )
}