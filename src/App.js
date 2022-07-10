import {ThemeProvider} from "@mui/system"
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./component/appbar";
import Banner from "./component/banner";
import Promotion from "./component/promotion";

function App() {
  useEffect(() => {
    document.title = "Shopping"
  },[])
  return (
    <ThemeProvider theme={theme}>
      {/* Product
          Footer
          AppDrawer */}
      <AppBar />
      <Promotion />
      <Banner />
      
    </ThemeProvider>
    
  );
}

export default App;
