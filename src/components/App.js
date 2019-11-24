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
    min-height: 100vh;
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
`;

const CalculatorDiv = styled.div`
    border: 1px solid #080808;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevOperation: " ",
            currentOperation: " ",
            operator: " ",
            baseArray: {
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
            },
        };
    }

    // Reset to default
    handleReset = () => this.setState({ prevOperation: " ", currentOperation: " ", operator: " " });

    // Delete or remove the last input
    handleDelete = message => {
        const newMessage = message.toString().slice(0, -1);
        this.setState({ currentOperation: newMessage });
    };

    handleFirstOperand = operatorInput => {
        const { currentOperation, prevOperation, baseArray } = this.state;

        prevOperation === " "
            ? this.setState({
                  operator: operatorInput,
                  prevOperation: currentOperation,
                  //   prevOperation: `${currentOperation}  ${operatorInput}`,
                  currentOperation: "",
              })
            : this.handleCompute(prevOperation, currentOperation, operatorInput, baseArray);
    };

    handleOperation = (prev, current, opera) => {
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

    handleCompute = (first, second, joiner, arr) => {
        const num1 = convertToNumber(arr, first);
        const num2 = convertToNumber(arr, second);
        const combineNum = this.handleOperation(num1, num2, joiner);
        const result = convertToRoman(arr, combineNum);
        return result;
    };

    handleClick = e => {
        e.preventDefault();
        const { prevOperation, currentOperation, operator, baseArray } = this.state;
        const { value } = e.target;
        const stringifyValue = value.toString();

        if (stringifyValue === "AC") return this.handleReset();

        if (stringifyValue === "DEL") return this.handleDelete(currentOperation);

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
            // this.setState({ operator: stringifyValue });
            return this.handleFirstOperand(stringifyValue);
        }

        // Handle input from user
        currentOperation == " "
            ? this.setState({ currentOperation: stringifyValue })
            : this.setState({ currentOperation: currentOperation + stringifyValue });

        if (stringifyValue === "=") {
            return this.setState({
                currentOperation: this.handleCompute(
                    prevOperation,
                    currentOperation,
                    operator,
                    baseArray
                ),
                prevOperation: " ",
                operator: " ",
            });
        }
    };

    render() {
        const { prevOperation, currentOperation, operator } = this.state;
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
                    <KeypadButton onClick={this.handleClick} />
                </CalculatorDiv>
            </AppDiv>
        );
    }
}

export default App;
