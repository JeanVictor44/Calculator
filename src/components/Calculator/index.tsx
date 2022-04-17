import { Button } from '../Button'
import * as S from './style'
import { Display } from '../Display'
import { useState } from 'react'

export const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0')
    const [currentOperation, setCurrentOperation ] = useState<null | string>(null)
    
    const [values, setValues ] = useState<[number,number]>([0,0])
    const [currentIndex, setCurrentIndex ] = useState<0|1>(0)

    const [clearDisplay, setClearDisplay] = useState(false)


    const clearMemory = () => {
        setDisplayValue('0')
        setCurrentOperation(null)
        setValues([0,0])
        setCurrentIndex(0)
    }
    
    const setOperation = (operation: string) => {
        if(currentOperation && values[1]){
            const currentValues: [number, number] = [...values]
            switch(currentOperation){
                case '+':
                    currentValues[0] = currentValues[0] + currentValues[1];
                    break;
                case '-':
                    currentValues[0] = currentValues[0] - currentValues[1];
                    break;
                case '/':
                    currentValues[0] = currentValues[0] / currentValues[1];
                    break;
                case '*':
                    currentValues[0] = currentValues[0] * currentValues[1];
                    break;
            }
            setValues(currentValues)
            setDisplayValue(String(currentValues[0]))
        }
        setCurrentOperation(operation)
        setCurrentIndex(1)
        setClearDisplay(true)
       
    }

    const addDigit = (digit: string) => {
        if(digit === '.' && displayValue.includes('.')){
            return
        }
        if(values[currentIndex] === 0 && digit === '.'){
            return
        }

        const clear = displayValue === '0' || clearDisplay
        const currentValue = clear ? '' : displayValue

        const display = currentValue +  digit

        setDisplayValue(display)
        setClearDisplay(false)

        if(digit !== '.') {
            const currentValues: [number,number] = [...values]
            currentValues[currentIndex] = parseFloat(display)
            setValues(currentValues)
            console.log(currentValues)
        }
        
    }

    return (
        <S.Container>
            <Display value={displayValue} storeValue={values[1]}/>
            <Button label='AC' left click={clearMemory}/>
            <Button label='/' bg click={setOperation}/>
            <Button label='7' click={addDigit}/>
            <Button label='8' click={addDigit}/>
            <Button label='9' click={addDigit}/>
            <Button label='*' bg click={setOperation}/>
            <Button label='4' click={addDigit}/>
            <Button label='5' click={addDigit}/>
            <Button label='6' click={addDigit}/>
            <Button label='-' bg click={setOperation}/>
            <Button label='1' click={addDigit}/>
            <Button label='2' click={addDigit}/>
            <Button label='3' click={addDigit}/>
            <Button label='+' bg click={setOperation}/>
            <Button label='0' left click={addDigit}/>
            <Button label='.' click={addDigit}/>
            <Button label='=' bg click={setOperation}/>
        </S.Container>
    )
}