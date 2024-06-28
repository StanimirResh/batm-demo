import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import styles from "./ScanQr.module.css";

import { AppContext } from "../../contexts/AppContext";
import CancelButton from "../../components/common/CancelButton/CancelButton";
import HelpText from "../../components/common/HelpText/HelpText";
import Phone from "../../components/Phone3D/Phone";

const ScanQr = () => {
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

    const handleCoinClick = () => {
        navigate("/insert-cash");
    };

    return (
        <>
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
                <div className={styles.phoneWrapper} onClick={handleCoinClick}>
                    <Phone />
                </div>
            </div>
        </>
    );
};

export default ScanQr;
