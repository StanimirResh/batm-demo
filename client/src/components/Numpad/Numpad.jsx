import React from "react";
import styles from "./Numpad.module.css";

const Numpad = ({ phoneNumber, setPhoneNumber, handleConfirmClick }) => {
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

    return (
        <div className={styles.numpad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "⇦", "0/+", "OK"].map((key, index) => (
                <button
                    key={index}
                    className={
                        key === "OK" ? styles.okButton : styles.numpadButton
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
            ))}
        </div>
    );
};

export default Numpad;
