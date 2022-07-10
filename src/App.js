import {ThemeProvider} from "@mui/system"
import { useEffect } from "react";
import theme from "./styles/theme";
import AppBar from "./component/appbar";

function App() {
  useEffect(() => {
    document.title = "Shopping"
  },[])
  return (
    <ThemeProvider theme={theme}>
      {/* Banner
          Promotion
          Product
          Footer
          AppDrawer */}
      <AppBar />
      
    </ThemeProvider>
    
  );
}

export default App;
