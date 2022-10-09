import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

const Weather = WeatherData.map((element, idx) => {
    return (
          <WeatherForecast 
          img={element.img} 
          conditions={element.conditions} 
          time={element.time}
          key={idx}
          />
    )
  });

  export default Weather;