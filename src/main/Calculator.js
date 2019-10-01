import  React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button'
import Display from '../components/Display'
import { thisExpression } from '@babel/types';

export default class Calculator extends Component{

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('clean')
    }

    setOperation(op) {
        console.log('operation: ' + op)
    }

    addDigit(n) {
        console.log('number: '+ n)
    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = op => thisExpression.setOperation(op)
        return (
            <div className="calculator">
                <Display value="0"/>
                <Button label="AC" triple click={this.clearMemory}/>
                <Button label="/" click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}