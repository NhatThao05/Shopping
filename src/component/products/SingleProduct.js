import { ProductImage, Product } from "../../styles/product";
import ProductMeta from "./ProductMeta";


export default function SingleProduct({product, matches, directory}) {
 return (
  <>
  <Product>
   <ProductImage src={product.image}/>
   <ProductMeta product={product} matches={matches} />
  </Product>
  </>

 )
}