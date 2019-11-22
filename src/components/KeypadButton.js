import React from "react";
import styled from "@emotion/styled";

const KeypadDiv = styled.div`
    width: 80%;
    padding: 0;
    padding-top: 0.9em;
    height: auto;
    margin: 0 auto;
    display: grid;
    background: smoke;
    grid-template-columns: 4fr 1fr;
`;

const BasicDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    button {
        background: white;
        &:hover {
            background: blue;
            color: white;
        }
    }
`;

const OperationsDiv = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    button {
        background: red;
        &:hover {
            background: white;
            color: black;
        }
    }
`;

// justify-content: center;
// align-items: center;
const Button = styled.button`
    width: 6em;
    height: 6em;
    border-radius: 5px;
    margin: 0.5em;
    margin-bottom: 0.1em;

    span {
        font-size: 1.5rem;
        margin: 1px;
    }
`;

const KeypadButton = props => {
    const keypads = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "L",
        "C",
        "D",
        "M",
    ];
    const operations = ["CE", "+", "-", "/", "*", "="];
    return (
        <KeypadDiv>
            <BasicDiv>
                {keypads.map((item, i) => (
                    <Button
                        className="basic-Button"
                        key={item}
                        name={item}
                        label={item}
                        value={item}
                        onClick={props.onClick}
                    >
                        <span>{item}</span>
                    </Button>
                ))}
            </BasicDiv>
            <OperationsDiv operations-div>
                {operations.map((item, i) => (
                    <Button
                        key={item}
                        name={item}
                        label={item}
                        value={item}
                        onClick={props.onClick}
                    >
                        <span>{item}</span>
                    </Button>
                ))}
            </OperationsDiv>
        </KeypadDiv>
    );
};

export default KeypadButton;
