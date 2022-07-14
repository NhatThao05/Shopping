import {ThemeProvider} from "@mui/system"
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./component/appbar";
import Banner from "./component/banner";
import Promotion from "./component/promotion";
import Appdrawer from "./component/drawer";
import { UIProvider } from "./context/ui";

function App() {
  useEffect(() => {
    document.title = "Shopping"
  },[])
  return (
    <ThemeProvider theme={theme}>
      {/* Product
          Footer */}
      <UIProvider>
        <AppBar />
        <Promotion />
        <Banner />
        <Appdrawer />
      </UIProvider>
      
      
    </ThemeProvider>
    
  );
}

export default App;
