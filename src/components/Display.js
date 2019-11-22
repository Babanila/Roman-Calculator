import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
    width: 80%;
    font-size: 4rem;
    height: 60px;
    border: 1px solid black;
    background-color: white;
    color: #000000;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: center;
`;
const Display = props => {
    console.log(props, "display");
    return <Input type="text" value={props.value} disabled />;
};

export default Display;
