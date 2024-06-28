import React from "react";
import styles from "./HelpText.module.css";

const HelpText = (props) => {
    return (
        <section className={styles.chooseCryptoHelp}>
            <p>{props.text}</p>
        </section>
    );
};

export default HelpText;
