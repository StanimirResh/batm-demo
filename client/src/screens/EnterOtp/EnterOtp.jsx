import React, { useContext } from "react";
import InputScreen from "../../components/common/InputScreen/InputScreen";
import { useNavigate } from "react-router";
import { AppContext } from "../../contexts/AppContext";

const EnterOtp = () => {
    const { action } = useContext(AppContext);
    const navigate = useNavigate();

    const handleConfirmClick = () => {
        if (action == "buy") {
            navigate("/scan-qr");
        } else if (action == "sell") {
            
        }
    };

    return (
        <InputScreen
            headerText="Еднократна парола"
            instructionsText="Моля, въведете еднократната парола, изпратена Ви чрез SMS:"
            onConfirm={handleConfirmClick}
            inputLength={3}
            customButtons={[1, 2, 3, 4, 5, 6, 7, 8, 9, "⇦", `0`, "OK"]}
        />
    );
};

export default EnterOtp;
