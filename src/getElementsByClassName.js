// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, foundNodes) {
  // your code here
  if (foundNodes === undefined) {
    foundNodes = [];
  }
  if (node === undefined) {
    node = document.body;
  }
  // on a node, check if node is part of class
  if (node.classList !== undefined && node.classList.contains(className)) {
  // if it is, you add it to output array
    foundNodes.push(node);
  }
  // check the child nodes by calling getElementsByClassName
  for (var x = 0; x < node.childNodes.length; x++) {
    getElementsByClassName(className, node.childNodes[x], foundNodes);
  }
  // if no childnodes, then stop
  return foundNodes; 
};
