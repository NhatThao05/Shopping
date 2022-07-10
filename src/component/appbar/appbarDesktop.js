import { ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, StyledInputBase, Search } from "../../styles/appbar";
import Action from "./action"

export default function AppbarDesktop({matches}) {
 return (
  <AppbarContainer>
   <AppbarHeader>My Supplement</AppbarHeader> 
   <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}/>
   </Search>
   <Action />
   <MyList type="row">
    <ListItemText primary="Contact US" />
    <ListItemText primary="Support" />
   </MyList>
  </AppbarContainer>
 )
}