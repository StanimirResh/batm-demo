import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const ProtectedRoute = ({ children }) => {
    const { coin, action } = useContext(AppContext);

    if (!coin || !action) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
