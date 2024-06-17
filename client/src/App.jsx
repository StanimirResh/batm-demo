import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import ScreenSaver from "./components/screens/ScreenSaver/ScreenSaver";

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
