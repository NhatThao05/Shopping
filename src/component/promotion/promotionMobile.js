import { PromotionContainer, MessageText } from "../../styles/promotion"
import {Box} from "@mui/system"
import { Slide } from "@mui/material";
import { useEffect, useState, useRef } from "react";


const messages = [
 "Free delivery from 2.8 million",
 "Premium quality",
 "Discount code: Valencia"
]

export default function PromotionMobile({matches}) {
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
  <PromotionContainer ref={containerRef}>
     <Slide container={containerRef.current} direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 300}}>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
               <MessageText>{messages[index]}</MessageText>
          </Box>
     </Slide> 
  </PromotionContainer>
 )
}