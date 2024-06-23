import React from "react";
import InputScreen from "../../components/common/InputScreen/InputScreen";
import { useNavigate } from "react-router";

const EnterPhone = () => {
    const navigate = useNavigate();

    const handleConfirmClick = () => {
        navigate("/enter-otp");
    };

    return (
        <InputScreen
            headerText="Телефонен номер"
            instructionsText="Моля, въведете Вашия мобилен номер, на който да Ви изпратим SMS с еднократна парола:"
            onConfirm={handleConfirmClick}
            inputLength={3}
            customButtons={[1, 2, 3, 4, 5, 6, 7, 8, 9, "⇦", "0/+", "OK"]}
        />
    );
};

export default EnterPhone;