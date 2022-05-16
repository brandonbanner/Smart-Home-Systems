// slider.js
// Brandon Banner
var temp-slider = document.getElementById("tempRange");
var slider = document.getElementById("humidRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
