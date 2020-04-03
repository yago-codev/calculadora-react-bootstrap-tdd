import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

import CalculatorService from "./Calculator.service";

import "./Calculator.css";

function Calculator() {
  const [
    calculate,
    concatenateNumber,
    sumOperator,
    subtractionOperator,
    divisionOperator,
    multiplicationOperator
  ] = CalculatorService();

  const [txtNumbers, setTxtNumbers] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number) {
    let result;

    if (operation === null) {
      result = concatenateNumber(firstNumber, number);

      setFirstNumber(result);
    } else {
      result = concatenateNumber(secondNumber, number);

      setSecondNumber(result);
    }
    setTxtNumbers(result);
  }

  function defineOperation(op) {
    if (operation === null) {
      setOperation(op);
      return;
    }

    if (secondNumber !== null) {
      const result = calculate(
        parseFloat(firstNumber),
        parseFloat(secondNumber),
        operation
      );

      setOperation(op);
      setFirstNumber(result.toString());
      setSecondNumber(null);
      setTxtNumbers(result.toString());
    }
  }

  function actionCalculate() {
    if (secondNumber === null) {
      return;
    }

    const result = calculate(
      parseFloat(firstNumber),
      parseFloat(secondNumber),
      operation
    );

    setTxtNumbers(result);
  }

  function clear() {
    setTxtNumbers("0");
    setFirstNumber("0");
    setSecondNumber(null);
    setOperation(null);
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        padding: "5px",
        margin: "5px",
        width: "400px"
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={clear}>
              C
            </Button>
          </Col>

          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumbers"
              className="text-right"
              readOnly="readonly"
              value={txtNumbers}
              data-testid="txtNumbers"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("7")}>
              7
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("8")}>
              8
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("9")}>
              9
            </Button>
          </Col>

          <Col>
            <Button
              variant="warning"
              onClick={() => defineOperation(divisionOperator)}
            >
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("4")}>
              4
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("5")}>
              5
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("6")}>
              6
            </Button>
          </Col>

          <Col>
            <Button
              variant="warning"
              onClick={() => defineOperation(multiplicationOperator)}
            >
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("1")}>
              1
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("2")}>
              2
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("3")}>
              3
            </Button>
          </Col>

          <Col>
            <Button
              variant="warning"
              onClick={() => defineOperation(subtractionOperator)}
            >
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("0")}>
              0
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber(".")}>
              .
            </Button>
          </Col>

          <Col>
            <Button variant="success" onClick={actionCalculate}>
              =
            </Button>
          </Col>

          <Col>
            <Button
              variant="warning"
              onClick={() => defineOperation(sumOperator)}
            >
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
