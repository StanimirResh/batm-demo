import React from "react";
import styles from "./MenusHeader.module.css";

const MenusHeader = () => {
    return (
        <div className={styles.menusHeader}>
            <section className={styles.languageContainer}>
                <img src="bulgaria-flag.svg" alt="" />
                <img src="uk-flag.svg" alt="" />
            </section>
            <section className={styles.chooseCryptoHeadingContainer}>
                <img
                    src="btc-logo.svg"
                    alt="btc-logo"
                    className={styles.logo}
                />
                <div className={styles.chooseCryptoHeading}>
                    <p>Добре дошли на нашия Биткойн АТМ!</p>
                    <h3>Купи Биткойни!</h3>
                </div>
            </section>
        </div>
    );
};

export default MenusHeader;
