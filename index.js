// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  const newArray = [...array, item];
  return newArray;
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  const newArray = [item, ...array];
  return newArray;
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  //check if index is 0, if true then add to beginning using array destructuring.
  //if index is = to the last index then use array destructuring
  //for inbetween numbers we create a function that applies the splice method based on the index
  let newArray = [];
  if (index === 0){
    newArray = [item, ...array];
  }else if (index === (array.length - 1)){
    newArray = [...array, item];
  }else {
    newArray = [...array.slice(0 ,index), item, ...array.slice(index)];
  }
  return newArray;
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  const newArray = [...array.slice(0,index), item, ...array.slice(index + 1)];
  return newArray;
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  const newArray = [...array.slice(0,index), ...array.slice(index + 1)];
  return newArray;
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
  const newObj = {...object, name: newName};
  return newObj;
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
  const newObj = {...object, needsACupOfTea: !object.needsACupOfTea};
  return newObj;
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
  const newArray = [...array.slice(0,index), {...array[index], completed: !(array[index].completed)}, ...array.slice(index+1)];
  return newArray;
}
