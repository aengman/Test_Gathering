const findAmountAndValues = require('./functions')

let testObject = {
  test: [
    {
      name: "creeper"
    }
  ]
}
let testArrayObject = {
  test: "Incorrect value"
}
let testPropertyStringObject = {
  test: [
    {
      name: "michael",
      power: 20,
      home: {
        wrong: "this is definitely not right"
      }
    }
  ]
}
let mockObject = {
  leech: [
    {
      name: "michael",
      power: 20
    },
    {
      name: "maya",
      power: 21,
      home: "theatlantic"
    }
  ],
  deer: [
    {
      name: "MEGAMAN",
      power: 9000,
      home: "babylonia"
    },
    {
      name: "MEGAERMAN",
      power: 9001,
      home: "everywhere"
    }
  ],
  megalodon: [
    {
      name: "jura",
      power: 2000,
      home: "sweden"
    }
  ],
  cat: [
    {
      name: "cat",
      power: Infinity
    },
    {
      name: "cat",
      power: Infinity
    },
    {
      name: "cat",
      power: Infinity
    }
  ]
}
function testFunction() {
  return "Try Me!"
}
function compareArrays (array1, array2) {
  let sameArray = true
  if(array1.length !== array2.length){
    sameArray = false
  }
  for(let i; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      sameArray = false
    }
  }
  return sameArray
}
function checkNamesForStrings(valueArray) {
  valueArray.forEach((value) => {
    if(typeof value !== "string"){
      return false
    }
  })
  return true
}

describe('findAmountAndValues works correctly and checks for incorrect values', () => {
  test('first parameter test', () => {
    expect(() => findAmountAndValues(1, "check")).toThrow("Incorrect datatype - first parameter")
    expect(() => findAmountAndValues({}, "check")).toThrow("Incorrect datatype - first parameter")
    expect(() => findAmountAndValues(null, "check")).toThrow("Incorrect datatype - first parameter")
    expect(() => findAmountAndValues(testFunction, "check")).toThrow("Incorrect datatype - first parameter")
  })
  test('first parameter has proper arrays', () => {
    expect(() => findAmountAndValues(testArrayObject, "home")).toThrow("First parameter has incorrect arrays as creatures")
  })
  test('first parameter has proper strings', () => {
    expect(checkNamesForStrings(findAmountAndValues(testPropertyStringObject, "home").valueArray)).toBe(true)
  })
  test('second parameter test', () => {
    expect(() => findAmountAndValues(testObject, 2)).toThrow("Incorrect datatype - second parameter")
    expect(() => findAmountAndValues(testObject, "")).toThrow("Incorrect datatype - second parameter")
    expect(() => findAmountAndValues(testObject, "    ")).toThrow("Incorrect datatype - second parameter")
  })
  test('correct output', () => {
    expect(findAmountAndValues(mockObject, "home").amount).toBe(4)
    expect(compareArrays(findAmountAndValues(mockObject, "home").valueArray, ["theatlantic", "babylonia", "everywhere", "sweden"])).toBe(true)
  })
  test('valueArray is "empty" if resulting array is empty and amount 0', () => {
    expect(findAmountAndValues(testObject, "home").amount).toBe(0)
    expect(findAmountAndValues(testObject, "home").valueArray).toBe("Empty")
  })
})
