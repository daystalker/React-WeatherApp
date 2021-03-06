import axios from 'axios';

const API_KEY = '07bf2b6de8a40874274646e9093d82ef';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload:request //redux-promise waits for promise to be resolved and then sends the data
  };
}
