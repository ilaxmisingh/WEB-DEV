function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result;
  
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature!");
      return;
    }
  
    if (unit === "C") {
      // Convert Celsius to Fahrenheit and Kelvin
      let fahrenheit = (temperature * 9/5) + 32;
      let kelvin = temperature + 273.15;
      result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)} K`;
    } else if (unit === "F") {
      // Convert Fahrenheit to Celsius and Kelvin
      let celsius = (temperature - 32) * 5/9;
      let kelvin = (temperature - 32) * 5/9 + 273.15;
      result = `${temperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)} K`;
    } else if (unit === "K") {
      // Convert Kelvin to Celsius and Fahrenheit
      let celsius = temperature - 273.15;
      let fahrenheit = (temperature - 273.15) * 9/5 + 32;
      result = `${temperature} K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }
  
    document.getElementById("output").innerText = result;
  }
  
