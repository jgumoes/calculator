import { Console } from "console"

export default class Calculator {
  inputs: string[]

  constructor() {
    this.inputs = []
  }

  addNumber(number: string) {
    // if (/[\d\.]/.test(number)){} // i'm not sure if this is necessary, or if it will hurt performance
    if (/[\d\.]/.test(this.inputs[this.inputs.length-1])){
      this.inputs[this.inputs.length-1] += number
    }
    else{
      number = number !== "." ? number : "0" + number
      this.inputs.push(number)
    }
  }

  addOperation(operator: string){
    // todo: if inputs is empty, grab the answer from the last equation
    if (/[\d\.]/.test(this.inputs[this.inputs.length-1])){
      this.inputs.push(operator)
    }
  }

  del(){
    const last = this.inputs[this.inputs.length-1]
    if(last.length === 1){this.inputs.pop()}
    else{ this.inputs[this.inputs.length-1] = last.slice(0, -1) }
  }

  reduceByMultipliers(inputList: string[]){
    // reduces the inputList to remove the multipliers and dividors
    // returns a list of numbers and + & -
    var outputList = inputList
    for(let i = 0; i < outputList.length - 1; i++){
      // TODO: this loop would be simpler if the operators were objects
      if(outputList[i+1] === "x"){
        const a = Number(outputList[i])
        const b = Number(outputList[i+2])
        outputList.splice(i, 3, String(a*b))
        i -= 1
      }
      else if(outputList[i+1] === "/"){
        const a = Number(outputList[i])
        const b = Number(outputList[i+2])
        outputList.splice(i, 3, String(a/b))
        i -= 1
      }
    }
    return outputList
  }

  answer(){
    // [\d\.\+\-\\x]+[\d\.]
    // this method is inherently self-sanitizing (i.e. it will ignore trailing operators)
    let inputList = this.reduceByMultipliers(this.inputs)
    let i 
    let result = Number(inputList[0])
    for(i = 1; i < inputList.length; i++){
      switch (inputList[i]) {
        case "+":
          result += Number(inputList[i+1])
          break;
        case "-":
          result -= Number(inputList[i+1])
        default:
          break;
      }
    }
    return "" + result
  }
}

