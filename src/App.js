import React from "react";
import { useState } from 'react';

function App() {

  /** Stateler */
  const [calculator, setCalculator] = useState("");
  const [result, setResult] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");

  const operators = ['/', '*', '+', '-', '.'];

  function getCalculator() {
    return calculator;
  }

  /** Her bir butona tıklanıldığında çalışacak olan fonksiyon */
  function updateCalculator(value) {
    if ((operators.includes(value) && calculator === '') || (operators.includes(value) && operators.includes(calculator.slice(-1)))) {
      return;
    }
    setCalculator(calculator + value);
    setCurrentNumber(calculator + value);
  }

  function checkCalculator() {
    let array = Array.from(calculator);
  }


  /** C butonuna tıklanıldığında çalışacak olan buton */
  function resetTheCalculator() {
    setCalculator("");
  }

  /** Yüzdeliğini alacak olan fonksiyon. */
  function percentageOf() {
    let string = getCalculator();
    setCalculator(eval(string / 100).toString());
  }

  /** Instead of creating all digits buttons one by one, i created a new function that creates 1-9 buttons. */
  // const createButtons = () => {
  //   const digitsButtonArray = [];
  //   for (let i = 1; i < 10; i++) {
  //     digitsButtonArray.push(
  //       <button key={i} onClick={() => updateCalculator(i.toString())}>{i}</button>
  //     )
  //   }
  //   return digitsButtonArray;
  // }

  /** = butonuna tıklanıldığında çalışacak olan fonksiyon. */
  function calculateTheExpression() {
    // console.log("Current number -> " + eval(currentNumber));
    // console.log("Calculator -> " + calculator);
    let element = findLastOperator();
    console.log(element);
    let number = parseFloat(calculator);
    if (number instanceof Number) {
      let evaluationValue = number + element;
      setCalculator(eval(evaluationValue).toString());
    } else {
      setCalculator(eval(calculator).toString());
    }


  }

  function findLastOperator() {
    let element = "";
    let StringArray = Array.from(calculator);
    for (let i = StringArray.length; i > 0; i--) {
      if (StringArray[i] == operators[0] || StringArray[i] == operators[1] || StringArray[i] == operators[2] ||
        StringArray[i] == operators[3] || StringArray[i] == operators[4]) {
        element = StringArray[i];
      }
    }
    let lastElement = StringArray[StringArray.length - 1];
    let returnValue = element + lastElement;
    console.log("Last operator -> " + returnValue);
    return returnValue;
  }

  /** Sayıyı pozitiften negative çevirecek olan fonhksiyon. */
  function positiveToNegative() {
    let argument = getCalculator();
    let argumentToInteger = parseFloat(argument);
    let contraArgumentToInteger = argumentToInteger * (-1);
    let returnValue = contraArgumentToInteger.toString()
    setCalculator(returnValue);
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{0}</span> : ''}
          {calculator || '0'}
        </div>
        <div className="grid-container">
          <button className="item-1" onClick={() => resetTheCalculator()}>AC</button>
          <button className="item-2" onClick={() => positiveToNegative()}>{'+/-'}</button>
          <button className="item-3" onClick={() => percentageOf()}>%</button>
          <button className="item-4" onClick={() => updateCalculator('/')}>/</button>

          <button className="item-5" onClick={() => updateCalculator('7')}>7</button>
          <button className="item-6" onClick={() => updateCalculator('8')}>8</button>
          <button className="item-7" onClick={() => updateCalculator('9')}>9</button>
          <button className="item-8" style={{ backgroundColor: "#e0c010" }} onClick={() => updateCalculator('*')}>X</button>


          <button className="item-9" onClick={() => updateCalculator('4')}>4</button>
          <button className="item-10" onClick={() => updateCalculator('5')}>5</button>
          <button className="item-11" onClick={() => updateCalculator('6')}>6</button>
          <button className="item-12" style={{ backgroundColor: "#e0c010" }} onClick={() => updateCalculator('-')}>-</button>


          <button className="item-13" onClick={() => updateCalculator('1')}>1</button>
          <button className="item-14" onClick={() => updateCalculator('2')}>2</button>
          <button className="item-15" onClick={() => updateCalculator('3')}>3</button>
          <button className="item-16" style={{ backgroundColor: "#e0c010" }} onClick={() => updateCalculator('+')}>+</button>


          <button className="item-17" onClick={() => updateCalculator('0')}>0</button>
          <button className="item-18" onClick={() => updateCalculator('.')}>.</button>
          <button className="item-19" onClick={() => calculateTheExpression()}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
