import {ThemeProvider} from "@mui/system"
import { Button } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Shopping"
  },[])
  return (
    <ThemeProvider theme={theme}>
      {/* Appbar
          Banner
          Promotion
          Product
          Footer
          AppDrawer */}
      <div>
        <Button variant="contained">Go</Button>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
