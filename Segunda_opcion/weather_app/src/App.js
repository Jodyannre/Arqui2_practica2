
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast.js'
import { Loader } from 'semantic-ui-react'

const URL = 'https://api.openweathermap.org/data/2.5/onecall';
const URL2 = 'http://localhost:3001/datos'
const API_KEY = 'b94a885f25fbd1daf17a3ca0548205ae';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [temperatura, setTemperatura] = useState(null);
  const [luz, setLuz] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [velocidad, setVelocidad] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [Velocidad_tipo, setVelocidad_tipo] = useState(null);
  const [Visibilidad, setVisibilidad] = useState(null);
  const [Lluvia, setLluvia] = useState(null);
  const [Calor, setCalor] = useState(null);

  const getData = async () => {
    try {
      navigator.geolocation.getCurrentPosition(function(position){
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
  
      axios.get(URL2)
      .then((weatherData) => {
        console.log(weatherData);
        setForecast(weatherData.data);
        setTemperatura(weatherData.data[0].temperatura);
        setLuz(weatherData.data[0].luz);
        setHumedad(weatherData.data[0].humedad);
        setDireccion(weatherData.data[0].direccion);
        setVelocidad(weatherData.data[0].velocidad);
        setFecha(weatherData.data[0].fecha);
        setVelocidad_tipo(weatherData.data[0].velocidad_tipo);
        setVisibilidad(weatherData.data[0].visibilidad);
        setLluvia(weatherData.data[0].lluvia);
        setCalor(weatherData.data[0].calor);
        setLoading(false);
        //Probando traer desde la BD
        /*
        setTemperature(weatherData.data.current.temp);
        setSunset(weatherData.data.current.sunset);
        setSunrise(weatherData.data.current.sunrise);
        setHumidity(weatherData.data.current.humidity);
        setCity(weatherData.data.timezone);
        setIcon(weatherData.data.current.weather[0].main);
        setForecast(weatherData.data.daily);
        */
        
      })  
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(()=>{
    getData();
    const interval=setInterval(()=>{
      getData();
     },5000)   
     return()=>clearInterval(interval);
  },[Calor,Lluvia])

  return (
    <div className="main">
      <Header/>
      {loading ? (
        <div>
          <p>Cargando...</p>
          <Loader active inline />
        </div>
      ) :(
        <WeatherCard 
        /*
        temperature={temperature}
        sunset = {sunset}
        sunrise = {sunrise}
        humidity = {humidity}
        city = {city}
        icon = {icon}
        */
        temperatura = {temperatura}
        direccion = {direccion}
        luz = {luz}
        velocidad = {velocidad}
        humedad = {humedad}
        fecha = {fecha}
        Velocidad_tipo = {Velocidad_tipo}
        Visibilidad = {Visibilidad}
        Lluvia = {Lluvia}
        Calor = {Calor}
        />
      ) }
      <Forecast forecast={forecast}/>
    </div>
  );
}

export default App;
