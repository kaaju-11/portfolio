
import Testomonial from 'Components/Testomomial';
import { ValueObject } from 'interfaces';
import React, { useState } from 'react'

const TestoHome = () => {
  const [val, setVal] = useState<ValueObject[]>([]);
  const addTesto = (testo: ValueObject) =>{
      setVal([testo, ...val]);
  }
  return (
    <div>
      <Testomonial />
      </div>
  )
}

export default TestoHome