import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ChooseCrypto.module.css";
import MenusHeader from "../../common/MenusHeader";
import { useNavigate } from "react-router-dom";

const ChooseCrypto = () => {
    const [coins, setCoins] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get("/api/coins");
                setCoins(response.data);
            } catch (error) {
                console.error("Error fetching coins data:", error);
            }
        };

        fetchCoins();
    }, []);

    const handleOnClick = (coin) => {
        navigate(`/main-menu`, { state: { coin } });
    };

    return (
        <div className={styles.chooseCryptoScreen}>
            <MenusHeader />
            <section className={styles.supportedCoins}>
                {coins.map((coin) => (
                    <div key={coin.symbol} onClick={() => handleOnClick(coin)}>
                        <img
                            src={`${coin.symbol.toLowerCase()}-logo.svg`}
                            alt="coin-logo"
                            className={styles.coinImg}
                        />
                        <p>1 {coin.symbol}</p>
                        <p>{coin.price} BGN</p>
                    </div>
                ))}
            </section>
            <section className={styles.chooseCryptoHelp}>
                <p>За да продължите докоснете съответната монетна икона</p>
            </section>
        </div>
    );
};

export default ChooseCrypto;
