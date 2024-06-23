import React, { useEffect, useState } from "react";
import styles from "./PrivacyPolicy.module.css";

const ScreenSaver = () => {
    return (
        <div className={styles.privacyPolicyScreen}>
            <h1 className={styles.privacyPolicyHeader}>Политика за поверителност</h1>
            <div className={styles.privacyPolicyBox}>
                <p>
                    Молим ви да потвърдите телефонния си номер. Нужен ни е само
                    за да се свържем с вас, ако възникне технически проблем.
                    Няма да споделим вашия телефонен номер с който и да е
                    орган/лице за каквато и да е цел.
                </p>
            </div>
            <div className={styles.privacyPolicyButtons}>
                <button className={styles.privacyPolicyContinue}>Продължи</button>
                <button className={styles.privacyPolicyCancel}>Отказ</button>
            </div>
        </div>
    );
};

export default ScreenSaver;
