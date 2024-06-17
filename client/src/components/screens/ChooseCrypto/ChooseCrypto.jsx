import React from "react";
import styles from "./ChooseCrypto.module.css";

const ChooseCrypto = () => {
    return (
        <div className={styles.chooseCryptoScreen}>
            <h1>Choose cryptocurrency</h1>
            <p>BTC</p>
            <p>ETH</p>
            <p>LTC</p>
            <p>USDT</p>
        </div>
    );
};

export default ChooseCrypto;
