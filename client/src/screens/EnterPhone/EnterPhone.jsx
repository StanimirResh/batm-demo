import React, { useEffect, useContext, useState } from "react";
import MenusHeader from "../../components/common/MenusHeader";
import styles from "./EnterPhone.module.css";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";

const MainMenu = () => {
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

    const handleNumberClick = (number) => {
        if (phoneNumber.length >= 16) {
            return;
        }

        setPhoneNumber((prev) => prev + number);
    };

    const handleZeroPlusClick = () => {
        setPhoneNumber((prev) => {
            if (prev === "0") {
                return "+";
            } else {
                return prev + "0";
            }
        });
    };
    const handleDeleteClick = () => {
        setPhoneNumber((prev) => prev.slice(0, -1));
    };

    const handleConfirmClick = () => {
        // Handle the phone number submission
        console.log("Phone Number Submitted:", phoneNumber);
        // Navigate to the next screen or perform another action
        navigate("/next-screen");
    };

    return (
        <div className={styles.enterPhoneScreen}>
            <section className={styles.enterPhoneHeaderContainer}>
                <h1 className={styles.enterPhoneHeader}>Телефонен номер</h1>
                <p className={styles.enterPhoneInstructions}>
                    Моля, въведете Вашия мобилен номер, на който да Ви изпратим
                    SMS с еднократна парола:
                </p>
            </section>
            <input
                className={styles.phoneNumber}
                type="text"
                readOnly={true}
                value={phoneNumber}
                style={{ width: `${phoneNumber.length + 3}ch` }}
            ></input>
            <div className={styles.numpad}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "⇦", "0/+", "OK"].map(
                    (key, index) => (
                        <button
                            key={index}
                            className={
                                key === "OK"
                                    ? styles.okButton
                                    : styles.numpadButton
                            }
                            onClick={() => {
                                if (key === "⇦") handleDeleteClick();
                                else if (key === "OK") handleConfirmClick();
                                else if (key === "0/+") handleZeroPlusClick();
                                else handleNumberClick(key);
                            }}
                        >
                            {key}
                        </button>
                    )
                )}
            </div>
            <button
                className={styles.cancelButton}
                onClick={() => navigate(-1)}
            >
                ОТКАЗ
            </button>
        </div>
    );
};

export default MainMenu;
