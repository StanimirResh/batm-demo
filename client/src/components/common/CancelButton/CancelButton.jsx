import React from "react";
import { useNavigate } from "react-router";
import styles from "./CancelButton.module.css";

const CancelButton = (props) => {
    const navigate = useNavigate();

    return (
        <button
            className={`${styles.cancelButton} ${
                props.sticky ? styles.stickyCancelButton : ""
            }`}
            onClick={() => navigate(-1)}
        >
            ОТКАЗ
        </button>
    );
};

export default CancelButton;
