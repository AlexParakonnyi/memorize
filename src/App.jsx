import { useState } from "react";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./styles/mainTheme";

import RouterApp from "./router/RouterApp";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handlerOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handlerCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <RouterApp>
        <SideMenu isOpenMenu={isOpenMenu} handlerCloseMenu={handlerCloseMenu} />
        <Header handlerOpenMenu={handlerOpenMenu} />
        <Container maxWidth="md">
          <h1>Main page</h1>
        </Container>
      </RouterApp>
    </ThemeProvider>
  );
}

export default App;
