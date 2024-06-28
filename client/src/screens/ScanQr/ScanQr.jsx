import React, { useContext } from "react";
import styles from "./ScanQr.module.css";

import { AppContext } from "../../contexts/AppContext";
import CancelButton from "../../components/common/CancelButton/CancelButton";

const ScanQr = () => {
    const { coin, action } = useContext(AppContext);

    return (
        <div className={styles.scanQrScreen}>
            <div>
                <img src="btc-logo.svg" alt="" />
            </div>
            <div className={styles.qrHeadingContainer}>
                <h1>Въведете {coin.symbol} адрес за получаване</h1>
                <p>Сканирайте QR кода на Вашия портфейл</p>
            </div>
            <div className={styles.qrRightMenu}>
                <CancelButton sticky={false}/>
                <div className={styles.qrPreviewContainer}>
                    <p>Преглед</p>
                    <div className={styles.qrPreviewWindow}></div>
                </div>
            </div>
        </div>
    );
};

export default ScanQr;
