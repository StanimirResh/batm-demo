import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styles from "./ChooseCrypto.module.css";
import { useNavigate } from "react-router-dom";
import MenusHeader from "../../components/common/MenusHeader";
import { AppContext } from "../../contexts/AppContext";

const ChooseCrypto = () => {
    const [coins, setCoins] = useState([]);
    const navigate = useNavigate();
    const { setCoin } = useContext(AppContext);

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

    const handleCoinClick = (coin) => {
        setCoin(coin);
        navigate("/main-menu");
    };
    return (
        <div className={styles.chooseCryptoScreen}>
            <MenusHeader />
            <section className={styles.supportedCoins}>
                {coins.map((coin) => (
                    <div
                        key={coin.symbol}
                        onClick={() => handleCoinClick(coin)}
                    >
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
