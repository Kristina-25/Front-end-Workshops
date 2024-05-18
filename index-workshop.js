//  Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)

let  amount= 25;

if (amount > 100) {
    console.log("Shipping is free");
} else {
    console.log("Shipping is $10");
}

let result = amount > 100 ? "Shipping is free" : "Shipping is $10";
console.log(result);