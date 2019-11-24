import React, { Component, useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import styled from "@emotion/styled";
import KeypadButton from "./KeypadButton";
import Display from "./Display";
import { convertToRoman, convertToNumber } from "./Helpers";

const AppDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    font-family: Gotham Rounded, sans-serif;
    font-weight: normal;
    display: grid;
    justify-content: center;
    align-content: center;
`;

const HeadingDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 100;
    @media (min-width: 0px) and (max-width: 400px) {
        font-size: 1rem;
        height: 3rem;
        padding: 0;
    }
`;
// display: none;

const CalculatorDiv = styled.div`
    max-height: 100%;
    border: 1px solid #080808;
`;

function App() {
    const [prevOperation, setPrevOperation] = useState(" ");
    const [currentOperation, setCurrentOperation] = useState(" ");
    const [operator, setOperator] = useState(" ");
    const baseArray = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        VIII: 8,
        VII: 7,
        VI: 6,
        V: 5,
        IV: 4,
        I: 1,
    };
    // Reset to default
    const handleReset = () => {
        setPrevOperation(" ");
        setCurrentOperation(" ");
        setOperator(" ");
    };

    // Delete or remove the last input
    const handleDelete = message => {
        const newMessage = message.toString().slice(0, -1);
        setCurrentOperation(newMessage);
    };

    const handleFirstOperand = operatorInput => {
        if (prevOperation === " ") {
            setOperator(operatorInput);
            setPrevOperation(currentOperation);
            setCurrentOperation("");
        } else {
            handleCompute(prevOperation, currentOperation, operatorInput, baseArray);
        }
    };

    // Compute handler for arithmetics operations
    const handleOperation = (prev, current, opera) => {
        let computeResult;
        switch (opera) {
            case "+":
                computeResult = prev + current;
                break;
            case "-":
                computeResult = prev - current;
                break;
            case "*":
                computeResult = prev * current;
                break;
            case "÷":
                computeResult = prev / current;
                break;
            default:
                computeResult = 0;
        }
        return computeResult;
    };

    const handleCompute = (first, second, joiner, arr) => {
        const num1 = convertToNumber(arr, first);
        const num2 = convertToNumber(arr, second);
        const combineNum = handleOperation(num1, num2, joiner);
        if (combineNum <= 0) return "NaN";
        const result = convertToRoman(arr, combineNum);
        return result;
    };

    const handleClick = e => {
        e.preventDefault();
        const { value } = e.target;
        const stringifyValue = value.toString();

        if (stringifyValue === "AC") return handleReset();

        if (stringifyValue === "DEL") return handleDelete(currentOperation);

        // Disable multiple entering of operator(operand) when second parameters is not provided
        if (
            (stringifyValue === "+" ||
                stringifyValue === "-" ||
                stringifyValue === "*" ||
                stringifyValue === "÷") &&
            (currentOperation.includes("+", "-", "*", "÷", "") || currentOperation === " ")
        )
            return;

        // Creating first parameter
        if (
            (stringifyValue === "+" ||
                stringifyValue === "-" ||
                stringifyValue === "*" ||
                stringifyValue === "÷") &&
            currentOperation !== " "
        ) {
            return handleFirstOperand(stringifyValue);
        }

        // Handle input from user
        currentOperation == " "
            ? setCurrentOperation(stringifyValue)
            : setCurrentOperation(currentOperation + stringifyValue);

        if (stringifyValue === "=") {
            setCurrentOperation(
                handleCompute(prevOperation, currentOperation, operator, baseArray)
            );
            setPrevOperation(" ");
            setOperator(" ");
        }
    };

    return (
        <AppDiv>
            <HeadingDiv>
                <h2>Roman Calculator</h2>
            </HeadingDiv>
            <CalculatorDiv>
                <Display
                    prevOperation={prevOperation}
                    currentOperation={currentOperation}
                    operator={operator}
                />
                <KeypadButton onClick={handleClick} />
            </CalculatorDiv>
        </AppDiv>
    );
}

export default App;
