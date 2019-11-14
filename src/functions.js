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

function findAmountAndValues(arrayObject, checkValue) {
    if(typeof arrayObject !== "object" || !(arrayObject === Object(arrayObject)) || Object.keys(arrayObject).length < 1){
      throw new Error("Incorrect datatype - first parameter")
    }
    if(typeof checkValue !== "string" || checkValue.length < 1 || checkValue.trim().length < 1){
        throw new Error("Incorrect datatype - second parameter")
    }
    for(let creature in arrayObject){
      if(!Array.isArray(arrayObject[creature])){
        throw new Error("First parameter has incorrect arrays as creatures")
      }
    }
  let amount = 0;
  let valueArray = []
  for(let creatureArray in arrayObject){
    arrayObject[creatureArray].forEach((creature) => {
      if(creature[checkValue]){
        valueArray.push([creature[checkValue]])
        amount++
      }
    })
  }
  if(valueArray.length < 1){
    valueArray = "Empty"
  }
  return {amount: amount, valueArray: valueArray}
}

module.exports = findAmountAndValues
