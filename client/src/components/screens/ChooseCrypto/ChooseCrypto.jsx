import React from "react";
import styles from "./ChooseCrypto.module.css";

const ChooseCrypto = () => {
    return (
        <div className={styles.chooseCryptoScreen}>
            <section className={styles.languageContainer}>
                <img src="bulgaria-flag.svg" alt="" />
                <img src="uk-flag.svg" alt="" />
            </section>
            <article className={styles.chooseCryptoWrapper}>
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

                <section className={styles.supportedCoins}>
                    <div>
                        <img
                            src="btc-logo.svg"
                            alt=""
                            className={styles.coinImg}
                        />
                        <p>1 BTC</p>
                        <p>100000 BGN</p>
                    </div>
                    <div>
                        <img
                            src="eth-logo.svg"
                            alt=""
                            className={styles.coinImg}
                        />
                        <p>1 ETH</p>
                        <p>10000 BGN</p>
                    </div>
                    <div>
                        <img
                            src="ltc-logo.svg"
                            alt=""
                            className={styles.coinImg}
                        />
                        <p>1 LTC</p>
                        <p>300 BGN</p>
                    </div>
                    <div>
                        <img
                            src="usdt-logo.svg"
                            alt=""
                            className={styles.coinImg}
                        />
                        <p>1 USDT</p>
                        <p>2 BGN</p>
                    </div>
                </section>
            </article>
            <section className={styles.chooseCryptoHelp}>
                <p>За да продължите докоснете съответната монетна икона</p>
            </section>
        </div>
    );
};

export default ChooseCrypto;
