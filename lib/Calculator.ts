
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

  answer(){
    let result = this.inputs
    // [\d\.\+\-\\x]+[\d\.]
  }
}

