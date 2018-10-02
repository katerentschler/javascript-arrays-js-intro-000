var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
var array = new Array();
function addElementToBeginningOfArray(array, element){
<<<<<<< HEAD
array= [element,...array];
return array;
=======
return [element,...array];
>>>>>>> 5fcda697dcce36a5b24685783005ebc7752b02f4
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array;
}

function addElementToEndOfArray(array, element){
<<<<<<< HEAD
  array= [...array, element];
  return array;
=======
  return [...array, element];
>>>>>>> 5fcda697dcce36a5b24685783005ebc7752b02f4
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray (array, index){
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
<<<<<<< HEAD

function removeElementFromBeginningOfArray(array){
  array= array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array=array.slice(0, array.length-1);
  return array;
}
=======
>>>>>>> 5fcda697dcce36a5b24685783005ebc7752b02f4
