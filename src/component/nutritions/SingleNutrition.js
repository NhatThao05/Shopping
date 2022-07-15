import { NutritionImage, Nutrition } from "../../styles/nutrition";
import NutritionMeta from "./NutritionMeta";

export default function SingleNutrition({matches, nutrition}) {
 return (
  <>
  <Nutrition>
   <NutritionImage src={nutrition.image}/>
   <NutritionMeta nutrition={nutrition} matches={matches} />
  </Nutrition>
  </>

 )
}