function celsiusToFahrenheit (celsius) {
    const c = typeof celsius === 'string' ? parseFloat(celsius) : celsius;
    const f = (c * 9/5) + 32;
    return `${c.toFixed(1)} Celsius = ${f.toFixed(1)} Fahrenheit`;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(29));

// Additional tests with string values 
console.log(celsiusToFahrenheit("25.5"));
console.log(celsiusToFahrenheit("-29"));