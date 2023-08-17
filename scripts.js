const weightInput = document.getElementById("weight-input");
const heighttInput = document.getElementById("height-input");

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", calcBMI);

function calcBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heighttInput.value) / 100;

  const bmi = weight / (height * height);

  const resultElement = document.getElementById("result");

  resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

  let message = "";

  if (bmi < 18.5) {
    message +=
      "Your BMI is below 18.5, indicating that you are underweight. It's important to focus on gaining healthy weight through proper nutrition and consultation with a healthcare professional.";
  } else if (bmi < 24.9) {
    message +=
      "Your BMI is between 18.5 and 24.9, which falls within the normal weight range. Keep up your healthy habits to maintain your well-being.";
  } else if (bmi < 29.9) {
    message +=
      "Your BMI is between 25 and 29.9, indicating that you are overweight. Consider adopting a balanced diet and engaging in regular physical activity to achieve a healthier weight.";
  } else if (bmi > 30) {
    message +=
      "Your BMI is 30 or higher, classifying you as obese. It's advisable to seek guidance from a healthcare provider to manage your weight and improve your overall health.";
  }

  const resultMessage = document.getElementById("message");

  resultMessage.textContent = message;
}
