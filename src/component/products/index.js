import { useTheme } from "@emotion/react"
import { useMediaQuery, Grid, Container, Box, Typography, Button } from "@mui/material";
import {products} from "../../data"
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";


export default function Products() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('md'))
 const renderProducts = products.map(product => (
  <Grid 
    item 
    key={product.id} 
    xs={2}
    sm={4}
    md={4}
    display="flex" 
    flexDirection={"column"} 
    alignItems="center">
     { matches ? 
        <SingleProduct product={product} matches={matches}/> : 
        <SingleProductDesktop product={product} matches={matches}/> }
  </Grid>
 ))
 return (
  <Container>
   <Box display="flex" justifyContent={'center'} sx={{ p:4 }}>
    <Typography variant="h4">Best Sellers</Typography>
   </Box>
   <Grid 
     container 
     spacing={{xs: 2, md: 3}}
     justifyContent={"center"} 
     sx={{margin: '20px 4px 10px 4px'}}
     columns={{xs: 4, sm: 8, md: 12}}> 
    {renderProducts}
   </Grid>
   <Box display="flex" justifyContent={'center'}>
    <Button variant="outlined">See All</Button>
   </Box>
  </Container>
 )
}