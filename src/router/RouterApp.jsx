import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Notfoundpage from "../pages/Notfoundpage";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />

        <Route path="login" element={<Loginpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
