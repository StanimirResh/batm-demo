import React, { useEffect, useContext } from "react";
import MenusHeader from "../../components/common/MenusHeader";
import styles from "./MainMenu.module.css";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";

const MainMenu = () => {
    const navigate = useNavigate();
    const { coin, setAction } = useContext(AppContext);

    useEffect(() => {
        if (!coin) {
            navigate("/");
        }
    }, [coin, navigate]);

    if (!coin) {
        return null;
    }

    const handleNavigate = (actionType) => {
        setAction(actionType);
        navigate("/privacy-policy");
    };

    return (
        <div className={styles.MainMenuScreen}>
            <MenusHeader />
            <section className={styles.MainMenuButtonsWrapper}>
                {coin.canPurchase && (
                    <button
                        className={styles.MainMenuButton}
                        onClick={() => handleNavigate("buy")}
                    >
                        <p>Покупка</p>
                    </button>
                )}
                {coin.canSell && (
                    <>
                        <button
                            className={styles.MainMenuButton}
                            onClick={() => handleNavigate("sell")}
                        >
                            <p>Продажба</p>
                        </button>
                        <button
                            className={styles.MainMenuButton}
                            onClick={() => handleNavigate("payout")}
                        >
                            <p>Талон за изплащане</p>
                        </button>
                    </>
                )}

                <button
                    className={styles.MainMenuButton}
                    onClick={() => navigate(-1)}
                >
                    <p>Назад</p>
                </button>
            </section>
        </div>
    );
};

export default MainMenu;
