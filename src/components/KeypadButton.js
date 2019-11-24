import React from "react";
import styled from "@emotion/styled";

const KeypadDiv = styled.div`
    margin-top: 1em;
    display: grid;
    background: smoke;
    grid-template-columns: repeat(4, 100px);
    z-index: 100;

    @media (min-width: 0px) and (max-width: 400px) {
        margin-top: 0.5em;
        grid-template-columns: repeat(4, 78px);
    }
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

    @media (min-width: 0px) and (max-width: 400px) {
        width: 2em;
        height: 2em;
    }
`;

const Button2 = styled.button`
    cursor: pointer;
    font-size: 3rem;
    color: red;
    outline: none;
    height: 1.5em;
    width: 8em;
    margin: 0.1em 0.1em 0.1em 0.15em;
    border-radius: 0.5em;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    background-color: #f6f6f6;
    &:hover {
        background: #c4c4ff;
        color: black;
    }

    @media (min-width: 0px) and (max-width: 420px) {
        width: 6.2em;
        height: 1.2em;
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
        "*",
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
            <Button2
                className="basic-Button"
                data-label="="
                key="="
                value="="
                onClick={props.onClick}
            >
                =
            </Button2>
        </KeypadDiv>
    );
};

export default KeypadButton;
