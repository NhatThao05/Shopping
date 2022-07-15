import { IconButton, Button } from "@mui/material";
import {styled, Box} from "@mui/system";
import {Colors} from "../theme";
import {slideInBottom, slideInRight} from '../../animation'

export const Nutrition = styled(Box)(({theme}) => ({
 marginTop: '20px',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column',
 [theme.breakpoints.up('md')]: {
  position: 'relative'
 }
}));

export const NutritionImage = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 width: '100%',
 padding: '10px',
 [theme.breakpoints.down('md')]: {
  width: '80%',
  padding: '24px'
 }
}))

export const NutritionActionButton = styled(IconButton)(() => ({
 background: Colors.white,
 margin: 4,
}))

export const NutritionFavButton = styled(NutritionActionButton)(({isFav, theme}) => ({
 color: isFav ? Colors.primary : Colors.light,
 [theme.breakpoints.up('md')]: {
  position: 'absolute',
  right: 0,
  top: 0
 }
}))

export const NutritionAddToCart = styled(Button)(({show, theme}) => ({
 width: "120px",
 fontSize: '12px',
 [theme.breakpoints.up('md')]: {
  position: 'absolute',
  bottom: '2%',
  width: "300px",
  padding: '10px 5px',
  animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
 },
 background: Colors.secondary,
 opacity: 0.9,
}))

export const NutritionMetaWrapper = styled(Box)(({them}) => ({
 padding: 4,
 display: 'flex',
 flexDirection: 'column',
}))

export const NutritionActionsWrapper = styled(Box)(({show, theme}) => ({
 [theme.breakpoints.up('md')]: {
  display: show ? 'visible' : 'none',
  position: 'absolute',
  right: 0,
  top: '20%',
  animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
 }
}))