import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from "./Calculator.service";

describe("Testing CalculatorService", () => {
  const [
    calculate,
    concatenateNumber,
    sumOperator,
    subtractionOperator,
    divisionOperator,
    multiplicationOperator
  ] = CalculatorService();

  it("should ensure that 1 + 4 = 5", () => {
    let sum = calculate(1, 4, sumOperator);

    expect(sum).toEqual(5);
  });

  it("should ensure that 1 - 4 = -3", () => {
    let subtraction = calculate(1, 4, subtractionOperator);

    expect(subtraction).toEqual(-3);
  });

  it("should ensure that 1 ÷ 4 = 0.25", () => {
    let division = calculate(1, 4, divisionOperator);

    expect(division).toEqual(0.25);
  });

  it("should ensure that 1 x 4 = 4", () => {
    let multiplication = calculate(1, 4, multiplicationOperator);

    expect(multiplication).toEqual(4);
  });

  it("sould return 0 for invalid operation", () => {
    let invalidOperation = calculate(1, 4, "%");

    expect(invalidOperation).toEqual(0);
  });
});
