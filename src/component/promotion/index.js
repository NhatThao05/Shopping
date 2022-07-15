import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import PromotionMobile from "./promotionMobile";
import PromotionDesktop from "./promotionDesktop";


export default function Promotion() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down("md"));

 return (
  <>
   {matches ? <PromotionMobile matches={matches}/> : <PromotionDesktop matches={matches}/>}
  </>

 )
}