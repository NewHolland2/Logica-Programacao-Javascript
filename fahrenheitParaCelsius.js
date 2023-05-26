function fahrenheitEmCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) / 9 * 5;
    return celsius;
}

var temperaturaCelsius = 68;
var temperaturaFahrenheit = fahrenheitEmCelsius(temperaturaCelsius);

console.log(temperaturaCelsius + " em graus celsius é igual a " + temperaturaFahrenheit +" em graus fahrenheit.");