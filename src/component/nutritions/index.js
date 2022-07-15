import { useTheme } from "@emotion/react"
import { useMediaQuery, Grid, Container, Box, Typography } from "@mui/material";
import {nutritions} from "../../data"
import SingleNutrition from "./SingleNutrition";

export default function Nutritions() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('md'))
 const renderNutritions = nutritions.map(nutrition => (
  <Grid 
    item 
    key={nutrition.id} 
    xs={2}
    sm={4}
    md={4}
    display="flex" 
    flexDirection={"column"} 
    alignItems="center">
   <SingleNutrition nutrition={nutrition} matches={matches}/>
  </Grid>
 ))
 return (
  <Container>
   <Box display="flex" justifyContent={'center'} sx={{ p:4 }}>
    <Typography variant="h4">Nutrition Directory</Typography>
   </Box>
   <Grid 
     container 
     spacing={{xs: 2, md: 3}}
     justifyContent={"center"} 
     sx={{margin: '20px 4px 10px 4px'}}
     columns={{xs: 4, sm: 8, md: 12}}> 
    {renderNutritions}
   </Grid>
  </Container>
 )
}