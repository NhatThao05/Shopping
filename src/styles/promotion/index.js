import { Typography } from "@mui/material"
import {Box, styled} from "@mui/system"
import { Colors } from "../theme"

export const SellingContainer = styled(Box)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  padding: '20px 0px 20px 0px'
 },
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 padding: '10px 0px 10px 0px',
 background: Colors.primary,
 color: Colors.light_gray,
}))

export const MyList = styled(Typography)(({type}) => ({
 display: type === 'row' ? 'flex' : 'block',
 flexGrow: 3,
 justifyContent: 'center',
 alignItems: "center",
}))

export const PromotionContainer = styled(Box)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  padding: '20px 0px 20px 0px'
 },
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 padding: '10px 0px 10px 0px',
 background: "#E3F2FD",
 color: Colors.primary,
 overflow: 'hidden',
}))

export const MessageText = styled(Typography)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  fontSize: '1.5rem',
 },
 color: Colors.primary,
 fontSize: '1rem'
}))


