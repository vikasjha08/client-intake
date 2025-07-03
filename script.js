const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiInput = document.getElementById('bmi');

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;
  if (weight && height) {
    const bmi = (weight / (height * height)).toFixed(1);
    bmiInput.value = bmi;
  }
}

weightInput.addEventListener('input', calculateBMI);
heightInput.addEventListener('input', calculateBMI);

document.getElementById('client-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
