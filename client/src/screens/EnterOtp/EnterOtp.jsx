import React, { useEffect, useContext, useState } from "react";
import styles from "./EnterOtp.module.css";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";
import Numpad from "../../components/Numpad/Numpad";

const EnterOtp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const { coin } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!coin) {
            navigate("/");
        }
    }, [coin, navigate]);

    if (!coin) {
        return null;
    }

    const handleConfirmClick = () => {
        navigate("/next-screen");
    };

    return (
        <div className={styles.enterOtpScreen}>
            <section className={styles.enterOtpHeaderContainer}>
                <h1 className={styles.enterOtpHeader}>Еднократна парола</h1>
                <p className={styles.enterOtpInstructions}>
                    Моля, въведете еднократната парола, изпратена Ви чрез SMS:
                </p>
            </section>
            <input
                className={styles.phoneNumber}
                type="text"
                readOnly={true}
                value={phoneNumber}
                style={{ width: `${phoneNumber.length + 3}ch` }}
            ></input>
            <Numpad
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                handleConfirmClick={handleConfirmClick}
            />
            <button
                className={styles.cancelButton}
                onClick={() => navigate(-1)}
            >
                ОТКАЗ
            </button>
        </div>
    );
};

export default EnterOtp;
