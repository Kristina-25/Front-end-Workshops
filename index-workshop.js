// Check temperature for comfort level ( comfort is between 20 and 25 )

let temperature = 18;

if (temperature >= 20 && temperature <= 25) {
    console.log("It's comfortable");
} else {
    console.log("It's not comfortable");
}

let result = temperature >=20 && temperature <= 25 ? "It's comfortable" : "It's not comfortable";
console.log(result);