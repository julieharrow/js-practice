// Exercise 1 - Shopping Trip
var shoppingList = ['pop tarts', 'ramen noodles','chips','salsa','coffee'];
console.log(shoppingList);
shoppingList.push('fruit loops');
console.log(shoppingList);
shoppingList[shoppingList.indexOf('coffee')] = "fair trade coffee";
console.log(shoppingList);
shoppingList.splice(2,2,"rice","beans");
console.log(shoppingList);
var shoppingCart = [];
console.log("List: " + shoppingList);
console.log("Cart: " + shoppingCart);
shoppingCart.push(shoppingList.pop())
console.log("List: " + shoppingList);
console.log("Cart: " + shoppingCart);
shoppingCart.push(shoppingList.shift())
console.log("List: " + shoppingList);
console.log("Cart: " + shoppingCart);
//
// while (shoppingList !== []) {
//   shoppingCart.push(shoppingList.shift())
//   console.log("List: " + shoppingList);
//   console.log("Cart: " + shoppingCart);
// }

shoppingCart.reverse().join(", ")
shoppingCart.push(shoppingList.shift())
console.log("Cart: " + shoppingCart);
