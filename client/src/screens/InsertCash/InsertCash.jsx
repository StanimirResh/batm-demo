import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";
import CancelButton from "../../components/common/CancelButton/CancelButton";

import styles from "./InsertCash.module.css";

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
        <div className={styles.insertCashScreen}>
            <div className={styles.insertHeadingContainer}>
                <h1>Подайте банкноти</h1>
                <p>
                    Моля, поставете банкнотите, които искате да обмените за{" "}
                    {coin.symbol}
                </p>
            </div>
            <div>
                
            </div>
            <CancelButton sticky={true} />
        </div>
    );
};

export default InsertCash;
