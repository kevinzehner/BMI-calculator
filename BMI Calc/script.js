"use strict";

//selecting elements

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const result = document.getElementById("result");
const btn = document.getElementById("calculate");

console.log(result);

// Event listener on calculate button
btn.addEventListener("click", function () {
  // Retrieve the weight and height values as strings
  const weightString = weightInput.value;
  const heightString = heightInput.value;

  // Convert the weight and height strings to numbers
  const weight = parseFloat(weightString);
  const height = parseFloat(heightString);

  // Validate the input values
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid values for weight and height.";
    return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate the BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Display the calculated BMI
  result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});
