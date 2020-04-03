export default function CalculatorService() {
  const sumOperator = "+";
  const subtractionOperator = "-";
  const divisionOperator = "/";
  const multiplicationOperator = "*";

  function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
      case sumOperator:
        result = num1 + num2;
        break;
      case subtractionOperator:
        result = num1 - num2;
        break;
      case divisionOperator:
        result = num1 / num2;
        break;
      case multiplicationOperator:
        result = num1 * num2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  function concatenateNumber(currentNumber, numConcat) {
    if (currentNumber === "0" || currentNumber === null) {
      currentNumber = "";
    }

    if (numConcat === "." && currentNumber === "") {
      return "0.";
    }

    if (numConcat === "." && currentNumber.indexOf(".") > -1) {
      return currentNumber;
    }

    return currentNumber + numConcat;
  }

  return [
    calculate,
    concatenateNumber,
    sumOperator,
    subtractionOperator,
    divisionOperator,
    multiplicationOperator
  ];
}
