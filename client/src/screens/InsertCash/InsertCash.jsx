import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";
import styles from "./InsertCash.module.css"

const InsertCash = () => {
    const { coin, action } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!coin || !action) {
            navigate("/");
        }
    }, [coin, navigate]);

    if (!coin || !action) {
        return null;
    }

    return (
        <div>
            <h1>Insert cash</h1>
        </div>
    );
};

export default InsertCash;