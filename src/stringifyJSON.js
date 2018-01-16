// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'function' || obj === undefined) {
    return;
  } else if (Array.isArray(obj)) {
    var start = '[';
    var stringifiedElements = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedElements.push(stringifyJSON(obj[i]));
    }
    start += stringifiedElements.join(',');
    return start += ']';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' ) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'object' && obj !== null) {
    var start = '{';
    var stringifiedValues = [];
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        stringifiedValues.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    start += stringifiedValues.join(',');
    return start + '}';
  }
};
