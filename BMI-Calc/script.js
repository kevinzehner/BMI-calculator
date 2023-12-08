"use strict";

//selecting elements

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const result = document.getElementById("result");
const btn = document.getElementById("calculate");

console.log(result);

btn.addEventListener("click", function () {
  const weightString = weightInput.value;
  const heightString = heightInput.value;

  const weight = parseFloat(weightString);
  const height = parseFloat(heightString);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid values for weight and height.";
    return;
  }

  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});
