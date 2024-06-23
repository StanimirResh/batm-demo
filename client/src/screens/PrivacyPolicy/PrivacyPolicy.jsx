import React, { useEffect, useContext } from "react";
import styles from "./PrivacyPolicy.module.css";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";

const ScreenSaver = () => {
    const navigate = useNavigate();
    const { coin, action } = useContext(AppContext);

    useEffect(() => {
        if (!coin || !action) {
            navigate("/");
        }
    }, [coin, action, navigate]);

    if (!coin || !action) {
        return null;
    }

    const handleContinue = () => {
        navigate("/enter-phone");
    };
    return (
        <div className={styles.privacyPolicyScreen}>
            <h1 className={styles.privacyPolicyHeader}>
                Политика за поверителност
            </h1>
            <div className={styles.privacyPolicyBox}>
                <p>
                    Молим ви да потвърдите телефонния си номер. Нужен ни е само
                    за да се свържем с вас, ако възникне технически проблем.
                    Няма да споделим вашия телефонен номер с който и да е
                    орган/лице за каквато и да е цел.
                </p>
            </div>
            <div className={styles.privacyPolicyButtons}>
                <button
                    className={styles.privacyPolicyContinue}
                    onClick={handleContinue}
                >
                    Продължи
                </button>
                <button
                    className={styles.privacyPolicyCancel}
                    onClick={() => navigate(-1)}
                >
                    Отказ
                </button>
            </div>
        </div>
    );
};

export default ScreenSaver;
