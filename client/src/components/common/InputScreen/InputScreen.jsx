import React, { useEffect, useContext, useState, act } from "react";
import { useNavigate } from "react-router";
import Numpad from "../../Numpad/Numpad";
import { AppContext } from "../../../contexts/AppContext";
import styles from "./InputScreen.module.css";
import CancelButton from "../CancelButton/CancelButton";

const InputScreen = ({
    headerText,
    instructionsText,
    onConfirm,
    inputLength,
    customButtons,
}) => {
    const [inputValue, setInputValue] = useState("");
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
        <div className={styles.inputScreen}>
            <section className={styles.inputHeaderContainer}>
                <h1 className={styles.inputHeader}>{headerText}</h1>
                <p className={styles.inputInstructions}>{instructionsText}</p>
            </section>
            <input
                className={styles.inputValue}
                type="text"
                readOnly={true}
                value={inputValue}
                style={{ width: `${inputValue.length + inputLength}ch` }}
            />
            <Numpad
                phoneNumber={inputValue}
                setPhoneNumber={setInputValue}
                handleConfirmClick={onConfirm}
                customButtons={customButtons}
            />
            <CancelButton sticky={true} />
        </div>
    );
};

export default InputScreen;
