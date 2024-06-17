import React from "react";
import styles from "./ScreenSaver.module.css";
import { useNavigate } from "react-router";

const ScreenSaver = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("choose-crypto");
    };

    return (
        <div className={styles.screenSaver} onClick={handleClick}>
            <article className={styles.purchasePriceBoard}>
                <p>Купи:</p>
                <ul className={styles.prices}>
                    <li>
                        1 BTC = <span>100000 BGN</span>
                    </li>
                    <li>
                        1 ETH = <span>9000 BGN</span>
                    </li>
                </ul>
            </article>
            <article className={styles.screenSaverContainer}>
                <img src="btc-logo.svg" />
                <div className={styles.screenSaverHeading}>
                    <h1>Купи Биткойни</h1>
                    <p>Докоснете екрана за да започнете</p>
                </div>
            </article>
        </div>
    );
};

export default ScreenSaver;
