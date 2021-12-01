
import Calculator from "../../lib/Calculator"

function quickAdd(input: string, calc){
  let n
  for(n of input){
    if (/[\d\.]/.test(n)){ calc.addNumber(n) }
    else{ calc.addOperation(n) }
  }
}

describe("calculator", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
    calc.addNumber("3")
    calc.addOperation("+")
    calc.addNumber("2")
    calc.addNumber("0")
  });

  test("should add numbers to the inputs string", ()=>{
    expect(calc.inputs).toStrictEqual(["3", "+", "20"])
  })

  test("should delete the last input to the string", ()=>{
    calc.del()
    expect(calc.inputs).toStrictEqual(["3", "+", "2"])
  })

})

describe("decimals", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
    // calc.addNumber("0"); calc.addNumber("."); calc.addNumber("2");
  })

  test("should be added correctly", ()=>{
    quickAdd("0.2+0.5", calc)
    expect(calc.answer).toStrictEqual("0.7")
  })

  test("should be preced by a 0 by defualt", ()=>{
    quickAdd(".2", calc)
    expect(calc.inputs).toStrictEqual(["0.2"])
  })
})

xdescribe("gives the answer for: ", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
  })

  test("3+2", ()=>{
    calc.addNumber("3"); calc.addOperation("+"); calc.addNumber("2");
    expect(calc.answer()).toBe("5")
  })
})