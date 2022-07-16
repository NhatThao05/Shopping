import {ThemeProvider} from "@mui/system"
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./component/appbar";
import Banner from "./component/banner";
import Promotion from "./component/promotion";
import Appdrawer from "./component/drawer";
import { UIProvider } from "./context/ui";
import Products from "./component/products";
import Nutritions from "./component/nutritions";
import Marketing from "./component/marketing";
import Footer from "./component/footer"
function App() {
  useEffect(() => {
    document.title = "Shopping"
  },[])
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <AppBar />
        <Promotion />
        <Banner />
        <Products />
        <Nutritions /> 
        <Marketing />
        <Footer />
        <Appdrawer />
      </UIProvider>
      
      
    </ThemeProvider>
    
  );
}

export default App;
