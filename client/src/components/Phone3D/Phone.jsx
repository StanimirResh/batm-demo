import React from "react";
import styles from "./Phone.module.css";

const Phone = () => {
    return (
        <div className={styles.phone}>
            <div className={styles.phoneShade}></div>
            <div className={styles.phoneSpeaker}></div>
            <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                    <div className={styles.phoneMenu}></div>
                </div>
                <div className={styles.phonePost}>
                    <img src="frame.png" alt="" />
                    <p>1A1zP1eP5QGefi2DMPTfTL5SLm v7DivfNa</p>
                </div>
            </div>
            <div className={styles.phoneButton}></div>
        </div>
    );
};

export default Phone;
