// Axios is a js library used to make HTTP requests within node (outside the browser)
import axios from "axios"

export async function getWeather(lat, lon, timezone) {
  // Parameters object
  // Allows us to provide the request with additional info (lat, long, timezone and more)
  const parametersObj = { params: { latitude: lat, longitude: lon, timezone } }

  // Here, we use axios to make a GET request to a specific API endpoint, and provide the parameters object
  const res = await axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m", parametersObj)

  // We print the data contained in the response
  console.log('Response Data::', res.data)
}

// We call upon the function and pass in values for lat, long and timezone
getWeather(38.90, -77.04, 'America/New_York')