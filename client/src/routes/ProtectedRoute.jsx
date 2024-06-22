import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const coin = location.state?.coin;

    if (!coin) {
        // If no coin is selected, redirect to the home page
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
