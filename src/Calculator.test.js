import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Calculator from "./Calculator";

describe("Calculator", () => {
  it("should render the component without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should clear the number field", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("C"));

    expect(getByTestId("txtNumbers")).toHaveValue("0");
  });

  it("should add 2 + 3 and get 5", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));

    expect(getByTestId("txtNumbers")).toHaveValue("5");
  });

  it("should add 2 - 3 and get 5", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));

    expect(getByTestId("txtNumbers")).toHaveValue("-1");
  });

  it("should add 2 x 3 and get 6", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));

    expect(getByTestId("txtNumbers")).toHaveValue("6");
  });

  it("should add 6 / 3 and get 6", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));

    expect(getByTestId("txtNumbers")).toHaveValue("2");
  });

  it("should add 2.5 + 3 and get 5.5", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));

    expect(getByTestId("txtNumbers")).toHaveValue("5.5");
  });
});
