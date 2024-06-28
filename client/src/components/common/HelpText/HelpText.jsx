import React from "react";
import { useNavigate } from "react-router";
import styles from "./HelpText.module.css";

const HelpText = (props) => {
    const navigate = useNavigate();

    return (
        <section className={styles.chooseCryptoHelp}>
            <p>{props.text}</p>
        </section>
    );
};

export default HelpText;
