import React from "react";
import { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    this.displayClear = this.displayClear.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  displayClear() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
      console.log(operation);
      
    } else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;
      const values = [...this.state.values];
      try {
        // eslint-disable-next-line
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
        if (isNaN(values[0]) || !isFinite(values[0])) {
          this.clearDisplay();
          return;
        }
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  addDigit(digit) {
    if (digit === "." && this.state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + digit;
    this.setState({ displayValue, clearDisplay: false });
    if (digit !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
      console.log(values);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button btnLabel="AC" click={this.displayClear} triple />
        <Button btnLabel="/" click={this.setOperation} operation />
        <Button btnLabel="7" click={this.addDigit} />
        <Button btnLabel="8" click={this.addDigit} />
        <Button btnLabel="9" click={this.addDigit} />
        <Button btnLabel="*" click={this.setOperation} operation />
        <Button btnLabel="4" click={this.addDigit} />
        <Button btnLabel="5" click={this.addDigit} />
        <Button btnLabel="6" click={this.addDigit} />
        <Button btnLabel="-" click={this.setOperation} operation />
        <Button btnLabel="1" click={this.addDigit} />
        <Button btnLabel="2" click={this.addDigit} />
        <Button btnLabel="3" click={this.addDigit} />
        <Button btnLabel="+" click={this.setOperation} operation />
        <Button btnLabel="0" click={this.addDigit} double />
        <Button btnLabel="." click={this.addDigit} />
        <Button btnLabel="=" click={this.setOperation} operation />
      </div>
    );
  }
}
