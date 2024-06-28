import React, { useContext } from "react";
import styles from "./ScanQr.module.css";

import { AppContext } from "../../contexts/AppContext";
import CancelButton from "../../components/common/CancelButton/CancelButton";
import HelpText from "../../components/common/HelpText/HelpText";

const ScanQr = () => {
    const { coin, action } = useContext(AppContext);

    return (
        <div className={styles.scanQrScreen}>
            <div className={styles.qrHeadingContainer}>
                <h1>Въведете {coin.symbol} адрес за получаване</h1>
                <p>Сканирайте QR кода на Вашия портфейл</p>
            </div>
            <div className={styles.qrRightMenu}>
                <div className={styles.qrPreviewContainer}>
                    <p>Преглед</p>
                    <div className={styles.qrPreviewWindow}></div>
                </div>
                <HelpText
                    text={`Адресът за получуване е адрес от Вашия портфейл, където закупените биткойни ще бъдат изпратени.\nУверете се, че е правилен!`}
                />
            </div>
            <CancelButton sticky={true} />
        </div>
    );
};

export default ScanQr;
