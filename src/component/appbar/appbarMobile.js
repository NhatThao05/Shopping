import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({matches}) {
 const {setOpenDrawer} = useUIContext()
 return (
  <AppbarContainer>
   <IconButton onClick={() => setOpenDrawer(true)}>
    <MenuIcon />
   </IconButton>
   <IconButton>
    <SearchIcon />
   </IconButton>
   <AppbarHeader textAlign={"center"} variant="h4">My Supplement</AppbarHeader> 
   <IconButton>
    <PersonOutlineIcon />
   </IconButton>
   <IconButton>
    <ShoppingCartCheckoutIcon />
   </IconButton>
  </AppbarContainer>
 )
}