/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

function temperatureConverter(temperature, unit) {
  if (unit === 'C') {
    return (temperature * 9/5) + 32 + 'F';
  } else if (unit === 'F') {
    return (temperature - 32) * 5/9 + 'C';
  }
}

document.getElementById('temperature-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const temperature = this.elements.temperature.value;
  const unit = this.elements.unit.value;
  const convertedTemperature = temperatureConverter(temperature, unit);
  document.getElementById('converted-temperature').innerHTML = convertedTemperature;
});
