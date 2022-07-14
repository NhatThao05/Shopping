import { Typography, List, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../theme";
import InputBase from '@mui/material/InputBase';


export const AppbarContainer = styled(Box)(() => ({
 display: 'flex',
 marginTop: 10,
 justifyContent: 'center',
 alignItems: 'center',
 padding: '4px 8px',
}))

export const AppbarHeader = styled(Typography)(() => ({
 padding: '4px',
 flexGrow: 1,
 fontSize: '2rem',
 color: Colors.dark,
 fontWeight: 'bolder'
}))

export const MyList = styled(List)(({type}) => ({
 display: type === 'row' ? 'flex' : 'block',
 flexGrow: 3,
 justifyContent: 'center',
 alignItems: "center",
}))

export const Search = styled('div')(({ theme }) => ({
 position: 'relative',
 borderRadius: theme.shape.borderRadius,
 backgroundColor: "#E3F2FD",
 '&:hover': {
   backgroundColor: "#BBDEFB",
 },
 marginLeft: 0,
 width: '100%',
 [theme.breakpoints.up('sm')]: {
   marginLeft: theme.spacing(1),
   width: 'auto',
 },
}));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: '100%',
 position: 'absolute',
 pointerEvents: 'none',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: 'inherit',
 '& .MuiInputBase-input': {
   padding: theme.spacing(1, 1, 1, 0),
   // vertical padding + font size from searchIcon
   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     width: '40ch',
     '&:focus': {
       width: '60ch',
     },
   },
 },
}));

export const CloseDrawerButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: '300px',
  zIndex: 1999,      
}));