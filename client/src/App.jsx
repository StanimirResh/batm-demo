import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ScreenSaver from "./components/screens/ScreenSaver/ScreenSaver";
import ChooseCrypto from "./components/screens/ChooseCrypto/ChooseCrypto";

import "../styles/style.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenSaver />} />
                <Route path="/choose-crypto" element={<ChooseCrypto />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
