// Get references to HTML elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Function to convert temperature
function convertTemperature() {
    const temp = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Error handling
    if (isNaN(temp)) {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    let convertedTemp, convertedTemp1;

    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temp * 9 / 5) + 32;
        //Convert Celsius to Kelvin
        convertedTemp1 = (temp + 273.15);
        resultDiv.innerHTML = `${temp} in Celsius is  ${convertedTemp.toFixed(2)}° in Fahrenheit and ${convertedTemp1.toFixed(2)}° in Kelvin`;

    } else if (unit === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5 / 9;
        //Convert Fahrenheit to Kelvin
        convertedTemp1 = (temp - 32) * 5 / 9 + 273.15;
        resultDiv.innerHTML = `${temp} in Fahrenheit is ${convertedTemp.toFixed(2)}° in Celsius and ${convertedTemp1.toFixed(2)}° in Kelvin `;
    } else {
        //Convert Kelvin to Celsius
        convertedTemp = (temp - 273.15);
        //Convert Kelvin to Fahrenheit
        convertedTemp1 = (temp - 273.15) * 9/5 + 32;
        resultDiv.innerHTML = `${temp} in Kelvin is ${convertedTemp.toFixed(2)}° in Celsius and ${convertedTemp1.toFixed(2)}° in Fahrenheit`;
    }
}

// Add event listener for the Convert button
convertBtn.addEventListener('click', convertTemperature);