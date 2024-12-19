//Discount % = ((listPricing - sellingPrice)/listPricing)*100;

var discountText = "% OFF"; 
var sellingPrice = 199;
var listPricing = 799;


var discountPercent = ((listPricing - sellingPrice)/listPricing) * 100 ; 
console.log("Discount Percentage: " + discountPercent);

var displayDiscountPercent = Math.round(discountPercent);

console.log("Display Percentage is : " + displayDiscountPercent + discountText);

var result = listPricing > sellingPrice

console.log(typeof result);  // boolean Results the type of the value 
console.log(typeof sellingPrice); // number
console.log(typeof discountText); // string

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence