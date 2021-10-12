
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast.js'
import { Loader } from 'semantic-ui-react'
import { Card, Feed } from 'semantic-ui-react'

const URL = 'https://api.openweathermap.org/data/2.5/onecall';
const URL2 = 'http://localhost:3001/datos'
const API_KEY = 'b94a885f25fbd1daf17a3ca0548205ae';

function App() {
  const [forecast, setForecast] = useState(null);
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

  const [temperatura1, setTemperatura1] = useState(null);
  const [luz1, setLuz1] = useState(null);
  const [direccion1, setDireccion1] = useState(null);
  const [velocidad1, setVelocidad1] = useState(null);
  const [humedad1, setHumedad1] = useState(null);
  const [fecha1, setFecha1] = useState(null);
  const [velocidad_tipo1, setVelocidad_tipo1] = useState(null);
  const [visibilidad1, setVisibilidad1] = useState(null);
  const [lluvia1, setLluvia1] = useState(null);
  const [calor1, setCalor1] = useState(null);

  const [temperatura2, setTemperatura2] = useState(null);
  const [luz2, setLuz2] = useState(null);
  const [direccion2, setDireccion2] = useState(null);
  const [velocidad2, setVelocidad2] = useState(null);
  const [humedad2, setHumedad2] = useState(null);
  const [fecha2, setFecha2] = useState(null);
  const [velocidad_tipo2, setVelocidad_tipo2] = useState(null);
  const [visibilidad2, setVisibilidad2] = useState(null);
  const [lluvia2, setLluvia2] = useState(null);
  const [calor2, setCalor2] = useState(null);

  const [temperatura3, setTemperatura3] = useState(null);
  const [luz3, setLuz3] = useState(null);
  const [direccion3, setDireccion3] = useState(null);
  const [velocidad3, setVelocidad3] = useState(null);
  const [humedad3, setHumedad3] = useState(null);
  const [fecha3, setFecha3] = useState(null);
  const [velocidad_tipo3, setVelocidad_tipo3] = useState(null);
  const [visibilidad3, setVisibilidad3] = useState(null);
  const [lluvia3, setLluvia3] = useState(null);
  const [calor3, setCalor3] = useState(null);

  const [temperatura4, setTemperatura4] = useState(null);
  const [luz4, setLuz4] = useState(null);
  const [direccion4, setDireccion4] = useState(null);
  const [velocidad4, setVelocidad4] = useState(null);
  const [humedad4, setHumedad4] = useState(null);
  const [fecha4, setFecha4] = useState(null);
  const [velocidad_tipo4, setVelocidad_tipo4] = useState(null);
  const [visibilidad4, setVisibilidad4] = useState(null);
  const [lluvia4, setLluvia4] = useState(null);
  const [calor4, setCalor4] = useState(null);

  const [temperatura5, setTemperatura5] = useState(null);
  const [luz5, setLuz5] = useState(null);
  const [direccion5, setDireccion5] = useState(null);
  const [velocidad5, setVelocidad5] = useState(null);
  const [humedad5, setHumedad5] = useState(null);
  const [fecha5, setFecha5] = useState(null);
  const [velocidad_tipo5, setVelocidad_tipo5] = useState(null);
  const [visibilidad5, setVisibilidad5] = useState(null);
  const [lluvia5, setLluvia5] = useState(null);
  const [calor5, setCalor5] = useState(null);

  const [temperatura6, setTemperatura6] = useState(null);
  const [luz6, setLuz6] = useState(null);
  const [direccion6, setDireccion6] = useState(null);
  const [velocidad6, setVelocidad6] = useState(null);
  const [humedad6, setHumedad6] = useState(null);
  const [fecha6, setFecha6] = useState(null);
  const [velocidad_tipo6, setVelocidad_tipo6] = useState(null);
  const [visibilidad6, setVisibilidad6] = useState(null);
  const [lluvia6, setLluvia6] = useState(null);
  const [calor6, setCalor6] = useState(null);

  const getData = async () => {
    try {

      axios.get(URL2)
      .then((weatherData) => {
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
      })  
    } catch (err) {
      console.error(err.message);
    }
  };





  const getData2 = async () => {
    try {

      axios.get(URL2)
      .then((weatherData) => {  

        setTemperatura1(weatherData.data[1].temperatura);
        setLuz1(weatherData.data[1].luz);
        setHumedad1(weatherData.data[1].humedad);
        setDireccion1(weatherData.data[1].direccion);
        setVelocidad1(weatherData.data[1].velocidad);
        setFecha1(weatherData.data[1].fecha);
        setVelocidad_tipo1(weatherData.data[1].velocidad_tipo);
        setVisibilidad1(weatherData.data[1].visibilidad);
        setLluvia1(weatherData.data[1].lluvia);
        setCalor1(weatherData.data[1].calor);

        
        setTemperatura2(weatherData.data[2].temperatura);
        setLuz2(weatherData.data[2].luz);
        setHumedad2(weatherData.data[2].humedad);
        setDireccion2(weatherData.data[2].direccion);
        setVelocidad2(weatherData.data[2].velocidad);
        setFecha2(weatherData.data[2].fecha);
        setVelocidad_tipo2(weatherData.data[2].velocidad_tipo);
        setVisibilidad2(weatherData.data[2].visibilidad);
        setLluvia2(weatherData.data[2].lluvia);
        setCalor2(weatherData.data[2].calor);

        setTemperatura3(weatherData.data[3].temperatura);
        setLuz3(weatherData.data[3].luz);
        setHumedad3(weatherData.data[3].humedad);
        setDireccion3(weatherData.data[3].direccion);
        setVelocidad3(weatherData.data[3].velocidad);
        setFecha3(weatherData.data[3].fecha);
        setVelocidad_tipo3(weatherData.data[3].velocidad_tipo);
        setVisibilidad3(weatherData.data[3].visibilidad);
        setLluvia3(weatherData.data[3].lluvia);
        setCalor3(weatherData.data[3].calor);


        setTemperatura4(weatherData.data[4].temperatura);
        setLuz4(weatherData.data[4].luz);
        setHumedad4(weatherData.data[4].humedad);
        setDireccion4(weatherData.data[4].direccion);
        setVelocidad4(weatherData.data[4].velocidad);
        setFecha4(weatherData.data[4].fecha);
        setVelocidad_tipo4(weatherData.data[4].velocidad_tipo);
        setVisibilidad4(weatherData.data[4].visibilidad);
        setLluvia4(weatherData.data[4].lluvia);
        setCalor4(weatherData.data[4].calor);

        setTemperatura5(weatherData.data[5].temperatura);
        setLuz5(weatherData.data[5].luz);
        setHumedad5(weatherData.data[5].humedad);
        setDireccion5(weatherData.data[5].direccion);
        setVelocidad5(weatherData.data[5].velocidad);
        setFecha5(weatherData.data[5].fecha);
        setVelocidad_tipo5(weatherData.data[5].velocidad_tipo);
        setVisibilidad5(weatherData.data[5].visibilidad);
        setLluvia5(weatherData.data[5].lluvia);
        setCalor5(weatherData.data[5].calor);
        
        setTemperatura6(weatherData.data[6].temperatura);
        setLuz6(weatherData.data[6].luz);
        setHumedad6(weatherData.data[6].humedad);
        setDireccion6(weatherData.data[6].direccion);
        setVelocidad6(weatherData.data[6].velocidad);
        setFecha6(weatherData.data[6].fecha);
        setVelocidad_tipo6(weatherData.data[6].velocidad_tipo);
        setVisibilidad6(weatherData.data[6].visibilidad);
        setLluvia6(weatherData.data[6].lluvia);
        setCalor6(weatherData.data[6].calor);   
        setLoading(false);
      })  
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(()=>{
    getData();
    getData2();
    const interval=setInterval(()=>{
      getData();
      getData2();
     },1000)   
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

  <Card.Group itemsPerRow={3}>
      <Forecast 
              temperatura1 = {temperatura1}
              direccion1 = {direccion1}
              luz1 = {luz1}
              velocidad1 = {velocidad1}
              humedad1 = {humedad1}
              fecha1 = {fecha1}
              velocidad_tipo1 = {velocidad_tipo1}
              visibilidad1 = {visibilidad1}
              lluvia1 = {lluvia1}
              calor1 = {calor1}            
              />
      <Forecast 
              temperatura1 = {temperatura2}
              direccion1 = {direccion2}
              luz1 = {luz2}
              velocidad1 = {velocidad2}
              humedad1 = {humedad2}
              fecha1 = {fecha2}
              velocidad_tipo1 = {velocidad_tipo2}
              visibilidad1 = {visibilidad2}
              lluvia1 = {lluvia2}
              calor1 = {calor2}            
              />
      <Forecast 
              temperatura1 = {temperatura3}
              direccion1 = {direccion3}
              luz1 = {luz3}
              velocidad1 = {velocidad3}
              humedad1 = {humedad3}
              fecha1 = {fecha3}
              velocidad_tipo1 = {velocidad_tipo3}
              visibilidad1 = {visibilidad3}
              lluvia1 = {lluvia3}
              calor1 = {calor3}            
              />     
            <Forecast 
              temperatura1 = {temperatura4}
              direccion1 = {direccion4}
              luz1 = {luz4}
              velocidad1 = {velocidad4}
              humedad1 = {humedad4}
              fecha1 = {fecha4}
              velocidad_tipo1 = {velocidad_tipo4}
              visibilidad1 = {visibilidad4}
              lluvia1 = {lluvia4}
              calor1 = {calor4}            
              />      
            <Forecast 
              temperatura1 = {temperatura5}
              direccion1 = {direccion5}
              luz1 = {luz5}
              velocidad1 = {velocidad5}
              humedad1 = {humedad5}
              fecha1 = {fecha5}
              velocidad_tipo1 = {velocidad_tipo5}
              visibilidad1 = {visibilidad5}
              lluvia1 = {lluvia5}
              calor1 = {calor5}            
              />
            <Forecast 
              temperatura1 = {temperatura6}
              direccion1 = {direccion6}
              luz1 = {luz6}
              velocidad1 = {velocidad6}
              humedad1 = {humedad6}
              fecha1 = {fecha6}
              velocidad_tipo1 = {velocidad_tipo6}
              visibilidad1 = {visibilidad6}
              lluvia1 = {lluvia6}
              calor1 = {calor6}            
              />   
    </Card.Group>
    </div>
  );
}
//
export default App;
