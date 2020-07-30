// Initialize Storage
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Initialize Weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI
const ui = new UI();

// Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city,state);

  // Set location in local storage
  storage.setLocationData(city,state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

// get Weather On DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results);
  })
  .catch(err => console.log(err));
}
