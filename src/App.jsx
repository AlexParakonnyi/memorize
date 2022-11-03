import { useState } from "react";
import { Container } from "@mui/material";
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
    <>
      <SideMenu isOpenMenu={isOpenMenu} handlerCloseMenu={handlerCloseMenu} />
      <Header handlerOpenMenu={handlerOpenMenu} />
      <Container maxWidth="md">
        <h1>Main page</h1>
      </Container>
    </>
  );
}

export default App;
