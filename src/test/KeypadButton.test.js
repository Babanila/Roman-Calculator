import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import KeypadButton from "../components/KeypadButton";

describe("KeypadButton Component Test", () => {
    afterEach(cleanup);

    it("should renders without crashing", () => {
        const KeypadButtonComponent = renderer.create(<KeypadButton />).toJSON();
        expect(KeypadButtonComponent).toMatchSnapshot();
    });

    it("should render correct number of element", () => {
        const KeypadButtonWrapper = shallow(<KeypadButton />);
        expect(KeypadButtonWrapper.find("div").exists).toBeTruthy();
        expect(KeypadButtonWrapper.find("button").exists).toBeTruthy();
        expect(KeypadButtonWrapper.find("div").length).toEqual(0);
        expect(KeypadButtonWrapper.find("button").length).toEqual(0);
    });

    it("should render correct number of children element", () => {
        const KeypadButtonWrapper = mount(<KeypadButton />);
        expect(KeypadButtonWrapper.find("div").exists).toBeTruthy();
        expect(KeypadButtonWrapper.find("button").exists).toBeTruthy();
        expect(KeypadButtonWrapper.find("div").length).toEqual(1);
        expect(KeypadButtonWrapper.find("button").length).toEqual(21);
    });

    it("should show the right values for output", () => {
        const { getByText } = render(<KeypadButton />);

        expect(getByText("AC")).toBeInTheDocument();
        expect(getByText("X")).toBeInTheDocument();
        expect(getByText("L")).toBeInTheDocument();
        expect(getByText("*")).toBeInTheDocument();
    });
});
