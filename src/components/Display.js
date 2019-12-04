import React from "react";
import styled from "@emotion/styled";

const Output = styled.div`
    height: 5em;
    grid-column: 1 / -1;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-around;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    z-index: 70;
`;

const Previous = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
`;

const Current = styled.div`
    color: white;
    font-size: 2.5rem;
`;

const Display = props => {
    const { prevOperation, currentOperation, operator } = props;

    return (
        <Output>
            <Previous data-previous-operand>
                {prevOperation} {operator}
            </Previous>
            <Current data-current-operand>{currentOperation}</Current>
        </Output>
    );
};

export default Display;
