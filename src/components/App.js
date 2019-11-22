import React, { Component } from "react";
import styled from "@emotion/styled";
import KeypadButton from "./KeypadButton";
import Display from "./Display";

const AppDiv = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
`;

const ContentDiv = styled.div`
    width: 40%;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    border: 3px solid gray;
    background: #e5e5e5e5;
`;

const HeadingDiv = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    text-align: center;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { result: "", userInput: "" };
    }

    handleInputChange = e => {
        e.preventDefault();
        const { value } = e.target;
        console.log(value, "InputChange");

        this.setState({ userInput: value });
        console.log(value);
    };

    handleClick = e => {
        e.preventDefault();
        const { userInput } = this.state;
        console.log(userInput, "handleCllick");
        this.setState({ result: userInput });
    };

    render() {
        const { result } = this.state;
        return (
            <AppDiv>
                <ContentDiv className="main-title">
                    <HeadingDiv>
                        <h2>Roman Calculator</h2>
                    </HeadingDiv>
                    <Display value={result} />

                    <KeypadButton onClick={this.handleClick} />
                </ContentDiv>
            </AppDiv>
        );
    }
}

export default App;
