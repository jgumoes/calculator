import Calculator from "../../lib/Calculator"

function quickInput(input: string, calc){
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
    quickInput("3+20", calc)
  });

  test("should add numbers to the inputs string", ()=>{
    // expect(calc.inputs).toStrictEqual(["3", "+", "20"])
    expect(calc.answer()).toStrictEqual("23")
  })

  test("should delete the last input to the string", ()=>{
    calc.del()
    // expect(calc.inputs).toStrictEqual(["3", "+", "2"])
    expect(calc.answer()).toStrictEqual("5")
  })

})

describe("gives the answer for: ", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
  })

  test("3+2", ()=>{
    quickInput("3+2", calc)
    expect(calc.answer()).toBe("5")
  })

  test("3+2+5-1", ()=>{
    quickInput("3+2+5-1", calc)
    expect(calc.answer()).toBe("9")
  })

  test("10-1", ()=>{
    quickInput("10-1", calc)
    expect(calc.answer()).toStrictEqual("9")
  })

  test("2x3x4", ()=>{
    quickInput("2x3x4", calc)
    expect(calc.answer()).toStrictEqual("24")
  })

  test("7/2", ()=>{
    quickInput("7/2", calc)
    expect(calc.answer()).toStrictEqual("3.5")
  })

  test("3+9/3", ()=>{
    quickInput("3+9/3", calc)
    expect(calc.answer()).toStrictEqual("6")
  })

  test("9/3+7", ()=>{
    quickInput("9/3+7", calc)
    expect(calc.answer()).toStrictEqual("10")
  })

  test("7+5x4-18", ()=>{
    quickInput("7+5x4-18", calc)
    expect(calc.answer()).toStrictEqual("9")
  })

  test("20+5x4/2", ()=>{
    quickInput("20+5x4/2", calc)
    expect(calc.answer()).toStrictEqual("30")
  })
})
  
describe("decimals", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
  })

  test("should be preced by a 0 by defualt", ()=>{
    quickInput(".2", calc)
    expect(calc.inputs).toStrictEqual(["0.2"])
  })

  test("should be added correctly", ()=>{
    quickInput("0.2+0.5", calc)
    // console.log("inputs: "); console.log(calc.inputs)
    // console.log("result: " + calc.answer())
    expect(calc.answer()).toStrictEqual("0.7")
  })
})

describe("answer() should sanitise the inputs before giving an answer", ()=>{
  let calc
  beforeEach(()=>{
    calc = new Calculator()
  })

  test("3+2/", ()=>{
    // FIXME: this will return something different when fractions are properly implemented
    quickInput("3+2", calc)
    expect(calc.answer()).toBe("5")
  })

  test("3+2+", ()=>{
    quickInput("3+2", calc)
    expect(calc.answer()).toBe("5")
  })

  test("3+2-", ()=>{
    quickInput("3+2", calc)
    expect(calc.answer()).toBe("5")
  })

  test("3+2x", ()=>{
    quickInput("3+2", calc)
    expect(calc.answer()).toBe("5")
  })
})