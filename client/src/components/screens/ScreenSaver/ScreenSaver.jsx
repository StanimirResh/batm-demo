import React from "react";
import "./ScreenSaver.css";

const ScreenSaver = () => {
    return (
        <div className="screen-saver">
            <article className="purchase-price-board">
                <p>Купи:</p>
                <ul className="prices">
                    <li>
                        1 BTC = <span>100000 BGN</span>
                    </li>
                    <li>
                        1 ETH = <span>9000 BGN</span>
                    </li>
                </ul>
            </article>
            <article className="screen-saver-container">
                <img src="btc-logo.svg" />
                <div className="screen-saver-heading">
                    <h1>Купи Биткойни</h1>
                    <p>Докоснете екрана за да започнете</p>
                </div>
            </article>
        </div>
    );
};

export default ScreenSaver;
