import { MessageText, MyList, PromotionContainer, SellingContainer } from "../../styles/promotion"
import { Typography, Slide } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import {Box} from "@mui/system"

const messages = [
 "Free delivery from 2.8 million",
 "Premium quality",
 "Discount code: Valencia"
]

export default function Promotion(){
     const containerRef = useRef();
     const [index, setIndex] = useState(0);
     const [show, setShow] = useState(true);
     useEffect(() => {
          setTimeout(() => {
               setShow(false)
          },3000);

          const intervalID = setInterval(() => {
               setIndex((i) => (i + 1) % messages.length);
               setShow(true);

               setTimeout(() => {
                    setShow(false)
               },3000)
          },4000);
          return() => {
               clearInterval(intervalID)
          }
     },[])
 return (
<>
  <SellingContainer>
   <MyList type="row">
        <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Nutrition</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Clothing</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Products</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Food</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bolder', mr: 4}}>Fitness & Health Goals</Typography>
        <Typography variant="h6" sx={{fontWeight: 'bolder'}}>More Information</Typography> 
   </MyList>
  </SellingContainer>
  <PromotionContainer ref={containerRef}>
     <Slide container={containerRef.current} direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 300}}>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
               <MessageText>{messages[index]}</MessageText>
          </Box>
     </Slide> 
  </PromotionContainer>
</>

 )
}