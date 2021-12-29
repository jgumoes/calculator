import { Console } from "console"

// TODO: create a simple history class that contains but limits the number of previous answers

/*
okay so here me out, what if, what IF, the inputs list is actually a list of objects representing each
operation?

for example, there would be a number class that can store and return the numbers, but also parse them
into a string i.e. if the class stores 399981, then Number.print() returns "399,981".
Number.add(".") could add a decimal, or, if the decimal is given a custom button, Number.dec() could add
the decimal.

the operators +-x/ could have their own class initiated with their type.

the fraction class should work like the Calculator class, storing and manipulating inputs in the same way.
This would allow me to easily nest fractions to any arbitrary limit, since the fractions will be evaluated
identically to the calculator class. Infact, the fractions class could contain two instances of Calculator
named numerator and denominator (or top and bottom). the fraction class could have the method:
.answer() { return self.top.answer() / self.bottom.answer()}

there is another potential benefit: if each class is responsible for rendering itself, rendering the entire
screen would be pretty straitforward.

all the classes should have a .del() function that removes the last input. it would return true if successful,
but false if it wasn't able to and therefore must be deleted (i.e. if Number only has one character).

each class would need to return their length so the App knows where to insert the curser.
.length(op=0) {return 0 + self.length}

Calculator{
  self._length
  self.inputs = []
  
  public:
    function add()
    function del() {if not inputs[-1].del() {inputs.remove(-1)}}
    function answer() // travels self.inputs from left to right, creating a running total
    function plus()
    function minus()
    function times()
    // function divide() // actually probably not this one
    function equals()
    function fraction()
    function length( l = 0 ) { return self._length + l } // this should make it easy finding the curser position
  
  private:
    function insertInput(input) {
      if self.inputs[-1].addValue() == false:
        self.inputs.append(input)
    }
}

Plus{
  function add(input) { return false }
  function operate( a, b ) { return a + b }
  function del() { return false }
  function length( l = 0) { return 1 } probably not like this
}

NumberClass{
  self.value = ""

  function add(input) { self.value += input; return true } // input should only be numbers
  function dec() { self.value += "." }
  function number() { return Number(self.value)}
  function print() // turns 399981 into 399,981
}

Fraction{
  self.top
  self.bottom
  
  public:
    
}

*/

// TODO: change from class to module (unless I do the above in which case I might want to use inheritance)
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

