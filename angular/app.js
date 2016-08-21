// good habit to always surround a module by a wrapper function
function() {
  // creates an angular module called 'store' with no dependencies, i.e. [], and assigns it to a variable called 'app'
  var gems = [
    {
      name: 'Azurite',
      price: 2.95,
      description: "Great deal!",
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Sapphire',
      price: 5.95,
      description: "Great deal!",
      canPurchase: true,
      soldOut: false
    }];
  var app = angular.module('store',[]);
  // creates a controller for the 'app' module called 'StoreController' (note capitalization) and passes an anonymous function
  app.controller('StoreController',function(){
    this.products = gems;
  });
}
