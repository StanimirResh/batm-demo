import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScreenSaver from "./components/screens/ScreenSaver/ScreenSaver";
import "../styles/style.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenSaver />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
