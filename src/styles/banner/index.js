import {styled} from "@mui/material/styles";

export const BannerImageCover = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 // marginTop: 10,
 width: '100%',
 [theme.breakpoints.down('md')]: {
  width: '100%'
 },
 [theme.breakpoints.down('sm')]: {
  width: '100%',
  height: '100%',
 },
}))
