import React from 'react'
import Input from '../commoncomponents/Input';
import Slider from '../commoncomponents/Slider';

const EmiCalculator = () => {
  return (
    <div>
       <Input label="Enter Total Cost" isBlock type='number' />
       <Input label="Interest Rate" isBlock type='number' maxValue={5}/>
       <Input label="Processing Fee" isBlock type='number' />
       <Slider label="Down Payment" isBlock step={5}/>
    </div>
  )
}

export default EmiCalculator;
