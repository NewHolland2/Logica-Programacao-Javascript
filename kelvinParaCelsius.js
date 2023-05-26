function kelvinToCelsius(kelvin) {
    var celsius = kelvin - 273.15;
    return celsius;
}

var temperaturaKelvin = 400;
var temperaturaCelsius = kelvinToCelsius(temperaturaKelvin);

console.log(temperaturaKelvin + " em graus Kelvin é igual a " + temperaturaCelsius + " em graus Celsius.");