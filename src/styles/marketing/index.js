import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";

export const MarketingContainer = styled(Box)(({theme}) => ({
 [theme.breakpoints.up('md')]: {
  padding: '40px 0px 40px 0px'
 },
 display: 'flex',
 justifyContent: 'center',
 padding: "20px 0px 20px 0px",
 overflow: "hidden"
}))

