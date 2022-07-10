import { createTheme } from "@mui/material/styles";

export const Colors = {
 primary: "#2196F3",
 secondary: "#E5E5E5",
 success: "#4CAF50",
 dark: "#495057",
 light: "#aaa",
 muted: "#abafb3",
 border: "#DDDFE1",
 inverse: "#2F3D4A",
 shaft: "#333",
 ///////////////
 // Grays
 ///////////////
 dim_grey: "#696969",
 dove_gray: "#d5d5d5",
 body_bg: "#f3f6f9",
 light_gray: "rgb(230,230,230)",
};


const theme = createTheme({
 palette: {
  primary: {
   main: Colors.primary
  },
  secondary: {
   main: Colors.secondary
  },
  third: {
   main: Colors.dark
  }
 },
 component: {
  MuiButton: {
   defaultProps: {
    disableRipple: true,
    disableElevation: true,
   }
  }
 }
})

export default theme;
