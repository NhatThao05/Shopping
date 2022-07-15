import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack, Button } from "@mui/material";
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton } from "../../styles/product";
import ProductMeta from "./ProductMeta";


export default function SingleProduct({product, matches}) {
 return (
  <>
  <Product>
   <ProductImage src={product.image}/>
   <ProductMeta product={product} matches={matches} />
   <ProductActionsWrapper>
    <Stack direction="row">
     <ProductFavButton isFav={1}>
      <FavoriteIcon />
     </ProductFavButton>
     <ProductActionButton>
      <Button variant="outlined">BUY NOW</Button>
     </ProductActionButton>
    </Stack>
   </ProductActionsWrapper>
  </Product>
  </>
 )
}