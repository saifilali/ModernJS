class Weather{
  constructor(city, state){
    this.apiKey = 'af10ce3478664a907165159868abaf9b';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}