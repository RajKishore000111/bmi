document.getElementById('calculateBtn').addEventListener('click', () => {
    const weightInput = document.getElementById('weight').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
  
    let weight, height;
  
    // Get weight
    if (unit === 'metric') {
      weight = parseFloat(weightInput);
    } else {
      weight = parseFloat(weightInput) * 0.453592; // Convert lbs to kg
    }
  
    // Get height
    if (unit === 'metric') {
      height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    } else {
      const feet = parseFloat(document.getElementById('height-feet').value);
      const inches = parseFloat(document.getElementById('height-inches').value);
      height = (feet * 0.3048) + (inches * 0.0254); // Convert feet/inches to meters
    }
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height!');
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(1);
  
    let resultText = '';
    let resultClass = '';
  
    // Determine BMI category
    if (bmi < 18.5) {
      resultText = `Your BMI is ${bmi}, which is considered Underweight.`;
      resultClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText = `Your BMI is ${bmi}, which is considered Normal weight.`;
      resultClass = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      resultText = `Your BMI is ${bmi}, which is considered Overweight.`;
      resultClass = 'overweight';
    } else {
      resultText = `Your BMI is ${bmi}, which is considered Obese.`;
      resultClass = 'obese';
    }
  
    // Display the result with dynamic color based on BMI category
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p class="${resultClass}">${resultText}</p>`;
  });
  