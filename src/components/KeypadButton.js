import React from "react";
import styled from "@emotion/styled";

const KeypadDiv = styled.div`
    margin-top: 1em;
    display: grid;
    background: smoke;
    grid-template-columns: repeat(4, 100px);
`;

const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid white;
    outline: none;
    width: 3em;
    height: 3em;
    border-radius: 0.5em;
    background-color: #f6f6f6;
    &:hover {
        background: #c4c4ff;
        color: black;
    }
`;

const KeypadButton = props => {
    const keypads = [
        "I",
        "II",
        "III",
        "AC",
        "IV",
        "V",
        "VI",
        "+",
        "VII",
        "VIII",
        "IX",
        "-",
        "X",
        "L",
        "C",
        "÷",
        "D",
        "M",
        "DEL",
        "=",
    ];

    return (
        <KeypadDiv>
            {keypads.map((item, i) => (
                <Button
                    className="basic-Button"
                    data-label={item}
                    key={item}
                    value={item}
                    onClick={props.onClick}
                >
                    {item}
                </Button>
            ))}
        </KeypadDiv>
    );
};

export default KeypadButton;
