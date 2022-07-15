import { MyList, SellingContainer, PromotionContainer } from "../../styles/promotion"
import { Typography } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { Container } from "@mui/system";


export default function PromotionDesktop({matches}){
 return (
  <>
   <SellingContainer>
    <MyList type="row">
     <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Nutrition</Typography>
     <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Clothing</Typography>
     <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Products</Typography>
     <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Food</Typography>
     <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Fitness & Health Goals</Typography>
     <Typography variant="h6" sx={{fontWeight: 'bolder'}}>More Information</Typography> 
    </MyList>
   </SellingContainer>
   <PromotionContainer>
    <Container>
     <MyList type="row">
      <ListItemButton>
       <ListItemIcon>
        <LocalShippingOutlinedIcon />
       </ListItemIcon>
       <ListItemText primary="Free delivery from 2.8 milion" />
      </ListItemButton>
      <ListItemButton>
       <ListItemIcon>
        <BatteryChargingFullIcon />
       </ListItemIcon>
       <ListItemText primary="Beginning with Premium qualitty" />
      </ListItemButton>
      <ListItemButton>
       <ListItemIcon>
        <AccessTimeIcon />
       </ListItemIcon>
       <ListItemText primary="Getting special offer now" />
      </ListItemButton>
     </MyList>
   </Container>
   </PromotionContainer>
  </>
 )
}