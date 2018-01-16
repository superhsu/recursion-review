// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  // for primitives we can use if statements to return original value 
  // then use recursion on array or object values 

  if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false; 
  } else if (json === 'null') {
    return null; 
  } else if (!isNaN(Number(json))) {
    return Number(json); 
  } else if (json[0] === '"') {
    var newString = json.substring(1, json.length - 1);
    return newString; 
  } else if (json[0] === '[') {
    // split json string into an array of strings
    // call parseJson on each element in the array
    if (json.length === 2) {
      return [];
    } else {
      var substring = json.substring(1, json.length - 1);
      var arrayOfStrings = substring.split(',');
      var convertedArray = []; 
      for (var x = 0; x < arrayOfStrings.length; x++) {
        convertedArray.push(parseJSON(arrayOfStrings[x]));
      }
      return convertedArray;
    }
  } else if (json[0] === '{') {
    var stringWithoutBraces = json.substring(1, json.length - 1);
    var arrayOfStrings = objNoCurly.split(',');
    var arrayOfArrays = [];
    for (var i = 0; i < arrayOfStrings.length; i++) {
      arrayOfArrays.push(arrayOfStrings[i].split(':'));
    }
    var returnObj = {};
    // iterate through each array in arrayOfArrays to assign key-value pairs to returnObj
    for (var j = 0; j < arrayOfArrays.length; j++) {
      var key = parseJSON(arrayOfArrays[j][0]);
      var value = parseJSON(arrayOfArrays[j][1]);
      returnObj[key] = value;
    }
    return returnObj;    
  }
};
