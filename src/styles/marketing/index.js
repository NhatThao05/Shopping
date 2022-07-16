import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Colors } from "../theme";
import {Box} from "@mui/system";

export const MarketingImage = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 // marginTop: 10,
 width: '100%',
 [theme.breakpoints.down('md')]: {
  width: '80%'
 },
 [theme.breakpoints.down('sm')]: {
  width: '100%',
  height: '80%',
 },
}))

export const MarketingContainer = styled(Box)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  padding: '40px 0px 40px 0px'
 },
 display: 'flex',
 justifyContent: 'center',
 padding: "20px 0px 20px 0px",
 overflow: "hidden"
}))

export const DescriptionShop = styled(Typography)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  fontSize: '2rem',
 },
 color: Colors.dark,
 fontSize: '1.2rem'
}))