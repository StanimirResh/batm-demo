import React, { useEffect, useState } from "react";
import styles from "./ScreenSaver.module.css";
import { useNavigate } from "react-router";
import axios from "axios";

const ScreenSaver = () => {
    const [coins, setCoins] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("choose-crypto");
    };

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

    return (
        <div className={styles.screenSaver} onClick={handleClick}>
            <article className={styles.purchasePriceBoard}>
                <p>Купи:</p>
                <ul className={styles.prices}>
                    {coins.map((coin) => (
                        <li key={coin.symbol}>
                            1 {coin.symbol} = <span>{coin.price} EUR</span>
                        </li>
                    ))}
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
