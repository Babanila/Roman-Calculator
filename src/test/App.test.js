import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "../components/App";

describe("App Component Test", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("should renders without crashing", () => {
        const AppComponent = renderer.create(<App />).toJSON();
        expect(AppComponent).toMatchSnapshot();
    });

    it("should render element correctly", () => {
        const AppWrapper = shallow(<App />);

        expect(AppWrapper.find("div").exists).toBeTruthy();
        expect(AppWrapper.find("h2").exists).toBeTruthy();
        expect(AppWrapper.find("Display").exists).toBeTruthy();
        expect(AppWrapper.find("KeypadButton").exists).toBeTruthy();
        expect(AppWrapper.find("div").length).toEqual(0);
        expect(AppWrapper.find("h2").length).toEqual(1);
        expect(AppWrapper.find("KeypadButton").length).toEqual(1);
        expect(AppWrapper.find("Display").length).toEqual(1);
    });

    it("should render correct number of element", () => {
        const AppWrapper = mount(<App />);

        expect(AppWrapper.find("div").exists).toBeTruthy();
        expect(AppWrapper.find("h2").exists).toBeTruthy();
        expect(AppWrapper.find("Display").exists).toBeTruthy();
        expect(AppWrapper.find("KeypadButton").exists).toBeTruthy();
        expect(AppWrapper.find("div").length).toEqual(7);
        expect(AppWrapper.find("h2").length).toEqual(1);
        expect(AppWrapper.find("Display").length).toEqual(1);
        expect(AppWrapper.find("KeypadButton").length).toEqual(1);
    });
});
