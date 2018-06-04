import React, { Component } from "react";

import WeatherRow from "./WeatherRow";


class WeatherTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loaded: false,
        }
    }

    componentDidMount() {
        fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Yerevan%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .then(response => response.json())
            .then((data) => {
                let weatherData = data.query.results.channel.item.forecast.slice(0, 7);
                this.setState({
                    data: weatherData,
                    loaded: true,
                })
            })
    }

    render() {
        const { data, loaded } = this.state;
        return (
            <div>
                {
                    loaded ? 
                        <table className="weather-table">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Week Day</th>
                                    <th>High</th>
                                    <th>Low</th>
                                    <th>General Description</th>
                                </tr>
                            </thead>
                            <tbody className="weather-body">
                                {
                                    data.map(weather => <WeatherRow data={weather} key={weather.date} />)
                                }
                            </tbody>
                        </table> :
                        null
                }
            </div>
            
        )
    }
}

export default WeatherTable;