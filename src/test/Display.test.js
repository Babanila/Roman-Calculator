import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import Display from "../components/Display";

describe("Display Component Test", () => {
    afterEach(cleanup);

    let prevOperation, currentOperation, operator;

    beforeEach(() => {
        prevOperation = "XL";
        currentOperation = "VI";
        operator = "+";
    });

    it("should renders without crashing", () => {
        const DisplayComponent = renderer
            .create(
                <Display
                    prevOperation={prevOperation}
                    currentOperation={currentOperation}
                    operator={operator}
                />
            )
            .toJSON();
        expect(DisplayComponent).toMatchSnapshot();
    });

    it("should render correct number of element", () => {
        const DisplayWrapper = shallow(
            <Display
                prevOperation={prevOperation}
                currentOperation={currentOperation}
                operator={operator}
            />
        );
        expect(DisplayWrapper.find("div").exists).toBeTruthy();
        expect(DisplayWrapper.find("div").length).toEqual(0);
    });

    it("should render correct number of children element", () => {
        const DisplayWrapper = mount(
            <Display
                prevOperation={prevOperation}
                currentOperation={currentOperation}
                operator={operator}
            />
        );
        expect(DisplayWrapper.find("div").exists).toBeTruthy();
        expect(DisplayWrapper.find("div").length).toEqual(3);
    });

    it("should show the right values for output", () => {
        const { getByText } = render(
            <Display
                prevOperation={prevOperation}
                currentOperation={currentOperation}
                operator={operator}
            />
        );

        expect(getByText("XL +")).toBeInTheDocument();
        expect(getByText("VI")).toBeInTheDocument();
    });
});
