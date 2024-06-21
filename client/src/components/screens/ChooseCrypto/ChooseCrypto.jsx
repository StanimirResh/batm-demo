import React from "react";
import styles from "./ChooseCrypto.module.css";
import MenusHeader from "../../common/MenusHeader";

const ChooseCrypto = () => {
    return (
        <div className={styles.chooseCryptoScreen}>
            <MenusHeader />
            <section className={styles.supportedCoins}>
                <div>
                    <img src="btc-logo.svg" alt="" className={styles.coinImg} />
                    <p>1 BTC</p>
                    <p>100000 BGN</p>
                </div>
                <div>
                    <img src="eth-logo.svg" alt="" className={styles.coinImg} />
                    <p>1 ETH</p>
                    <p>10000 BGN</p>
                </div>
                <div>
                    <img src="ltc-logo.svg" alt="" className={styles.coinImg} />
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
            <section className={styles.chooseCryptoHelp}>
                <p>За да продължите докоснете съответната монетна икона</p>
            </section>
        </div>
    );
};

export default ChooseCrypto;
