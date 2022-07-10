import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { MyList } from "../../styles/appbar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

export default function Action() {
 return (
  <MyList type="row">
   <ListItemButton sx={{justifyContent:'center'}}>
    <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
     <PersonOutlineIcon />
    </ListItemIcon>
   </ListItemButton>
   <Divider orientation="vertical" flexItem />
   <ListItemButton sx={{justifyContent:'center'}}>
    <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
     <ShoppingCartCheckoutIcon />
    </ListItemIcon>
   </ListItemButton>
   <Divider orientation="vertical" flexItem />
   <ListItemButton sx={{justifyContent:'center'}}>
    <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
     <FavoriteBorderIcon />
    </ListItemIcon>
   </ListItemButton>
   <Divider orientation="vertical" flexItem />
   <ListItemButton sx={{justifyContent:'center'}}>
     <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
      <FlagOutlinedIcon />
     </ListItemIcon>
    </ListItemButton>
  </MyList>
 )
}