import React from "react";
import MenusHeader from "../../common/MenusHeader";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
    return (
        <div className={styles.MainMenuScreen}>
            <MenusHeader />
            <section className={styles.MainMenuButtonsWrapper}>
                <button className={styles.MainMenuButton}>
                    <p>Покупка</p>
                </button>
                <button className={styles.MainMenuButton}>
                    <p>Продажба</p>
                </button>
                <button className={styles.MainMenuButton}>
                    <p>Талон за изплащане</p>
                </button>
                <button className={styles.MainMenuButton}>
                    <p>Назад</p>
                </button>
            </section>
        </div>
    );
};

export default MainMenu;
