import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ScreenSaver from "./components/screens/ScreenSaver/ScreenSaver";
import ChooseCrypto from "./components/screens/ChooseCrypto/ChooseCrypto";
import MainMenu from "./components/screens/MainMenu/MainMenu";

import "../styles/style.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenSaver />} />
                <Route path="/choose-crypto" element={<ChooseCrypto />} />
                <Route path="/main-menu" element={<MainMenu />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
