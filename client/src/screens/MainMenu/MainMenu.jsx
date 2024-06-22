import React, { useEffect } from "react";
import MenusHeader from "../../components/common/MenusHeader";
import styles from "./MainMenu.module.css";
import { useLocation, useNavigate } from "react-router";
const MainMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const coin = location.state?.coin;

    useEffect(() => {
        if (!coin) {
            navigate("/");
        }
    }, [coin, navigate]);

    if (!coin) {
        return null; // Optionally, render a loading spinner or a message
    }

    return (
        <div className={styles.MainMenuScreen}>
            <MenusHeader />
            <section className={styles.MainMenuButtonsWrapper}>
                {coin.canPurchase && (
                    <button className={styles.MainMenuButton}>
                        <p>Покупка</p>
                    </button>
                )}
                {coin.canSell && (
                    <>
                        <button className={styles.MainMenuButton}>
                            <p>Продажба</p>
                        </button>
                        <button className={styles.MainMenuButton}>
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
