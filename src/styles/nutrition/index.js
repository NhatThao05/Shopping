import {styled, Box} from "@mui/system";

export const Nutrition = styled(Box)(({theme}) => ({
 marginTop: '20px',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column',
 [theme.breakpoints.up('md')]: {
  position: 'relative'
 }
 // 
}));

export const NutritionImage = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 width: '100%',
 padding: '10px',
 [theme.breakpoints.down('md')]: {
  width: '80%',
  padding: '24px'
 }
 // 
}))

export const NutritionMetaWrapper = styled(Box)(({them}) => ({
 padding: 4,
 display: 'flex',
 flexDirection: 'column',
 // 
}))

