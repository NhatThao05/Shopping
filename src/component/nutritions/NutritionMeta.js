import { Typography, Button } from "@mui/material";
import { NutritionMetaWrapper } from "../../styles/nutrition";

export default function NutritionMeta({nutrition, matches}){
 return (
  <>
  <NutritionMetaWrapper>
   <Typography variant={matches ? "h6" : 'h5'} lineHeight={2}>{nutrition.name}</Typography>
   <Typography variant={matches ? "caption" : 'body1'} lineHeight={2}>{nutrition.description}</Typography>
   <Button variant="outlined">Buy Now</Button>
  </NutritionMetaWrapper>
  
  </>
 )
}