import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductImage, Product, ProductFavButton, ProductAddToCart } from "../../styles/product";
import ProductMeta from "./ProductMeta";
import {useState} from "react";


export default function SingleProductDesktop({product, matches}) {
 const [showOption, setShowOption] = useState(false);
 const handleMouseEnter = () => {
  setShowOption(true)
 }
 const handleMouseLeave = () => {
  setShowOption(false)
 }
 return (
  <>
  <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
   <ProductImage src={product.image}/>
   <ProductFavButton isFav={0}>
    <FavoriteIcon />
   </ProductFavButton>
   {
    showOption && <ProductAddToCart show={showOption} variant="contained">Buy Now</ProductAddToCart>
   }
  </Product>
  <ProductMeta product={product} matches={matches} />

  </>
 )
}