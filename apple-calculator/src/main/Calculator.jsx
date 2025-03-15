import React, { useState } from "react";
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

const Calculator = () => {
  const [state, setState] = useState({ ...initialState });

  const clearDisplay = () => {
    setState({ ...initialState });
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const currentOperation = state.operation;
      const values = [...state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
        if (isNaN(values[0]) || !isFinite(values[0])) {
          clearDisplay();
          return;
        }
      } catch (error) {
        values[0] = state.values[0];
        console.log(error);
      }
      values[1] = 0;

      setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  const setPorcentage = () => {
    const porcentage = state.values[0] * 0.01;
    setState({ ...state, displayValue: porcentage });
  };

    const addDigit = (digit) => {
      if (digit === '.' && state.displayValue.includes('.')) {
        return;
      }
      const clearDisplay = state.displayValue === '0' || state.clearDisplay;
      const currentValue = clearDisplay ? '' : state.displayValue;
      const displayValue = currentValue + digit;
      setState({ ...state, displayValue, clearDisplay: false });
      if (digit !== '.') {
        const i = state.current;
        const newValue = parseFloat(displayValue);
        const values = [...state.values];
        values[i] = newValue;
        setState({ ...state, values });
        console.log(values);
      }
    };
    

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button btnlabel="AC" click={clearDisplay} double />
      <Button btnlabel="%" click={setPorcentage} />
      <Button btnlabel="/" click={() => setOperation("/")} operation />
      <Button btnlabel="7" click={addDigit} />
      <Button btnlabel="8" click={addDigit} />
      <Button btnlabel="9" click={addDigit} />
      <Button btnlabel="*" click={() => setOperation("*")} operation />
      <Button btnlabel="4" click={addDigit} />
      <Button btnlabel="5" click={addDigit} />
      <Button btnlabel="6" click={addDigit} />
      <Button btnlabel="-" click={() => setOperation("-")} operation />
      <Button btnlabel="1" click={addDigit} />
      <Button btnlabel="2" click={addDigit} />
      <Button btnlabel="3" click={addDigit} />
      <Button btnlabel="+" click={() => setOperation("+")} operation />
      <Button btnlabel="0" click={addDigit} double />
      <Button btnlabel="." click={addDigit} />
      <Button btnlabel="=" click={() => setOperation("=")} operation />
    </div>
  );
};

export default Calculator;