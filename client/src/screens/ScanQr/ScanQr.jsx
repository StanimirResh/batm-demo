import React from "react";
import styles from "./ScanQr.module.css";

const ScanQr = () => {
    return (
        <div className={styles.atmScreen}>
            <div className={styles.atm}>
                <div className={styles.atmHeader}>
                    <img
                        src="path_to_bitcoin_logo"
                        alt="Bitcoin Logo"
                        className={styles.bitcoinLogo}
                    />
                </div>
                <div className={styles.atmBody}>
                    <div className={styles.instruction}>
                        <h1>ВЪВЕДЕТЕ ВТС АДРЕС ЗА ПОЛУЧАВАНЕ</h1>
                        <p>Сканирайте QR кода на Вашия портфейл</p>
                    </div>
                    <button className={styles.cancelButton}>ОТКАЗ</button>
                    <div className={styles.preview}>
                        <div className={styles.previewHeader}>Преглед</div>
                        <img
                            src="path_to_preview_image"
                            alt="Preview"
                            className={styles.previewImage}
                        />
                    </div>
                    <div className={styles.instructions}>
                        <p>
                            Адресът за получаване е адрес от Вашия портфейл,
                            където закупените биткойни ще бъдат поставени.
                            Уверете се, че е правилен!
                        </p>
                        <p>
                            Ако притежавате NFC карта, докоснете я до NFC четеца
                        </p>
                    </div>
                    <button className={styles.walletButton}>
                        НЯМАТЕ ПОРТФЕЙЛ?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScanQr;
