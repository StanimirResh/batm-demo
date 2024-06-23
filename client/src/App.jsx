import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ScreenSaver from "./screens/ScreenSaver/ScreenSaver";
import ChooseCrypto from "./screens/ChooseCrypto/ChooseCrypto";
import MainMenu from "./screens/MainMenu/MainMenu";
import ProtectedRoute from "./routes/ProtectedRoute";
import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";
import { AppProvider } from "./contexts/AppContext";

import "../styles/style.css";

const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ScreenSaver />} />
                    <Route path="/choose-crypto" element={<ChooseCrypto />} />
                    <Route path="/main-menu" element={<MainMenu />} />
                    <Route
                        path="/privacy-policy"
                        element={
                            <ProtectedRoute>
                                <PrivacyPolicy />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
};

export default App;
