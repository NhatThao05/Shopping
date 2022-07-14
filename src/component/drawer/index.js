import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { CloseDrawerButton } from "../../styles/appbar";
import { Drawer, ListItemButton, ListItemIcon, List, Typography, styled, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
const MiddleDivider = styled((props) => (
 <Divider variant="middle" {...props} />
))``;

export default function Appdrawer() {
 const {openDrawer, setOpenDrawer} = useUIContext()
 return (
  <>
  {openDrawer && (
   <CloseDrawerButton onClick={() => setOpenDrawer(false)}>
     <CloseIcon sx={{fontSize: "2.5rem", color: "#fff"}} />
   </CloseDrawerButton>
  )}
  <Drawer open={openDrawer}>
   <List>
    <ListItemButton>
     <ListItemIcon><HomeIcon /></ListItemIcon>   
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">Nutrition</Typography>
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">Clothing</Typography>
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">Products</Typography>
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">Food</Typography>
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">Fitness & Health Goals</Typography>
    </ListItemButton>
    <MiddleDivider />
    <ListItemButton>
     <Typography sx={{fontWeight: 'bolder'}} variant="h6">More Information</Typography>
    </ListItemButton>
   </List>
  </Drawer>
  </>
 )
}