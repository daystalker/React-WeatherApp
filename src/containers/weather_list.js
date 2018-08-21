// purpose ofn weather_list is render the list of cities. so this will need to access redux states. so this has to be in containers state.

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  // for rendering single weather row.
  renderWeather(cityData){
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    console.log(temps.length);
    console.log(pressures.length);
    console.log(humidities.length);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//sends action to middleware and then to reducers...
// this argument in the function is state.weather --> so by using ES6 syntax
function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);