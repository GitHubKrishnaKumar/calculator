import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const validateInputs = () => {
    setErrorMessage('');
    if (num1 === '' && num2 === '') {
      setErrorMessage('Error : Please enter both numbers.');
      return false;
    }
    else if(num1 === ''){
        setErrorMessage('Error : Num1 cannot be empty.');
        return false;
    }
    else if(num2 === ''){
        setErrorMessage('Error : Num2 cannot be empty.');
        return false;
    }
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
      setErrorMessage('Error : Please enter valid numbers.');
      return false;
    }
    return true;
  };

  const isValidNumber = (num) => {
    const pattern = /^-?\d*\.?\d*$/;
    return pattern.test(num);
  };

  const add = () => {
    if (validateInputs()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${sum}`);
    }
  };

  const sub = () => {
    if (validateInputs()) {
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${difference}`);
    }
  };

  const multiple = () => {
    if (validateInputs()) {
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${product}`);
    }
  };

  const division = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Division by zero is not allowed.');
        return;
      }
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${quotient}`);
    }
  };

  return (
    <div>
      <div className='num1'>
        <label>Number1 :</label>
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter First Number'/>
      </div>
      <div className='num2'>
        <label>Number2 :</label>
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Enter Second Number'/>
      </div>
      <div className='btnClass'>
        <button onClick={add} className='btn'>+</button>
        <button onClick={sub} className='btn'>-</button>
        <button onClick={multiple} className='btn'>*</button>
        <button onClick={division} className='btn'>/</button>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {result && <div style={{ color: 'green' }}>{result}</div>}
    </div>
  );
};

export default Calculator;
