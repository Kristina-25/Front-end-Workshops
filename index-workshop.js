// Determining Pass or Fail Based on Score 0-100 ( below 65 is a fail )

let score = 66;

if (score >= 65) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let result = score >= 65 ? "Pass" : "Fail";
console.log(result);