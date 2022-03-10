import {useState} from "react";

const useInput = (validateFunction) => {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const inputValid = validateFunction(inputValue);
    const hasError = !inputValid && isTouched;

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value.trim());
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const inputReset = () => {
        setIsTouched(false);
        setInputValue('');
    };

    return {
        value: inputValid,
        isValid: inputValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset: inputReset
    }
};

export default useInput;
