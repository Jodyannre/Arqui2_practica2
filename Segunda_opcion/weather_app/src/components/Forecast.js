import react from "react";
import { Card, Feed } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactAnimatedWeather from 'react-animated-weather';
import { Icon } from '@iconify/react';
import { faWind,faTemperatureHigh,faArrowUp,faArrowDown,faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
//import moment from 'moment';
    export default function Forecast({forecast}){
        let dir_icon;
        let calor_icon = null,lluvia_icon = null,velocidad_tipo_icon = null,visibilidad_icon = null;
        let tableStyle = {
            "width": "90%",
            "gap": "40px 115px"
         }
         let tabStyle = {
            "width": "75%",
            "height":"50px",
            "gap": "40px 115px"
         }
         let tab2Style = {
            "width": "25%",
            "gap": "40px 115px"
         }

        const vel_icon = <FontAwesomeIcon icon={faWind} size='2x' color='#86C6FC' />;
        const temp_icon = <FontAwesomeIcon icon={faTemperatureHigh} size='2x' color='red' />;
        const luz_icon = <Icon icon="carbon:brightness-contrast" color="#fcba86" width="35" />;
        const hum_icon = <Icon icon="wi:humidity" color="#2b93eb" width="20" />
        const soleado = {
          icon: 'CLEAR_DAY',
          color: 'goldenrod',
          size: 30,
          animate: true
        };

        const soleado_calor = {
          icon: 'CLEAR_DAY',
          color: 'red',
          size: 30,
          animate: true
        };        
        
        const nublado = {
          icon: 'CLOUDY',
          color: '#788890',
          size: 30,
          animate: true
        };
        
        const nublado_calor = {
          icon: 'CLOUDY',
          color: 'red',
          size: 30,
          animate: true
        }
        
        const lluvia = {
          icon: 'RAIN',
          color: '#5BC7FE',
          size: 30,
          animate: true
        };
        
        const ventoso = {
          icon: 'WIND',
          color: 'black',
          size: 30,
          animate: true
        };
        
        const definirPronostico = ((pronostico)=>{
          if (pronostico.velocidad_tipo = 'alto'){
            //con viento alto
            velocidad_tipo_icon = <ReactAnimatedWeather
            icon={ventoso.icon}
            color={ventoso.color}
            size={ventoso.size}
            animate={ventoso.animate}
            />;
          }else{
            velocidad_tipo_icon = null;
          }
          
          if (pronostico.visibilidad === 'despejado'){
            //despejado
            visibilidad_icon = <ReactAnimatedWeather
            icon={soleado.icon}
            color={soleado.color}
            size={soleado.size}
            animate={soleado.animate}
            />;
          }else if (pronostico.visibilidad === 'nublado'){
            //nublado
            visibilidad_icon = <ReactAnimatedWeather
            icon={nublado.icon}
            color={nublado.color}
            size={nublado.size}
            animate={nublado.animate}
            />;  
          }
          
          if (pronostico.calor === 'con' && pronostico.visibilidad === 'despejado'){
            //calor
            calor_icon = <ReactAnimatedWeather
            icon={soleado_calor.icon}
            color={soleado_calor.color}
            size={soleado_calor.size}
            animate={soleado_calor.animate}
            />;
            visibilidad_icon = null;
          }else if (pronostico.calor === 'con' && pronostico.visibilidad === 'nublado'){
            calor_icon = <ReactAnimatedWeather
            icon={nublado_calor.icon}
            color={nublado_calor.color}
            size={nublado_calor.size}
            animate={nublado_calor.animate}
            />; 
            visibilidad_icon = null;
          }else if (pronostico.calor == 'sin'){
            calor_icon = null;
          }
          
          if (pronostico.lluvia = 'con'){
            //con lluvia
            lluvia_icon = <ReactAnimatedWeather
            icon={lluvia.icon}
            color={lluvia.color}
            size={lluvia.size}
            animate={lluvia.animate}
            />;
          }else if (pronostico.lluvia = 'sin'){
            lluvia_icon = null;
          }
        })

        const definirDireccion = ((direccion)=>{
            if (direccion === 'norte'){
                dir_icon = <FontAwesomeIcon icon={faArrowUp} size='2x' color='green' />;
               }else if (direccion === 'sur'){
                 dir_icon = <FontAwesomeIcon icon={faArrowDown} size='2x' color='purple' />;
               }else if (direccion === 'este'){
                 dir_icon = <FontAwesomeIcon icon={faArrowLeft} size='2x' color='brown'/>;
               }else{
                 dir_icon = <FontAwesomeIcon icon={faArrowRight} size='2x' color='black'/>;
               }            
        })
   
        return(
            <div style={{marginTop: 20}}>
                <Card.Group itemsPerRow={4}>
                    {forecast.slice(1).map((data)=>{
                        {definirDireccion(data.direccion);}
                        {definirPronostico(data);}
                        return(
                            <Card className='forecast-card'>
                                <Card.Content>
                                    <Card.Header className='forecast-date'>                    
                                        Guatemala {visibilidad_icon} {calor_icon} {velocidad_tipo_icon} {lluvia_icon}  
                                        </Card.Header>
                                    <Card.Header className='forecast-header'>                    
                                        {data.fecha}                                    
                                        </Card.Header>
                                        
                                    <Card.Description className='temp-desc'>
                                        <div>
                                        <table style={tableStyle}>
                                                <tbody>
                                                <tr>
                                                <td style = {tabStyle}>{dir_icon} {data.direccion}</td>
                                                <td style = {tab2Style}>{vel_icon} {data.velocidad} km/h</td>
                                                </tr>
                                                <tr>
                                                <td style = {tabStyle}>{temp_icon} {data.temperatura} C°</td>
                                                <td style = {tab2Style}>{hum_icon}{data.humedad} %</td>
                                                </tr>
                                                <tr>
                                                <td style = {tabStyle}>{luz_icon} {data.luz}</td>
                                                </tr>
                                                </tbody>
                                        </table>
                                        </div>
                                    </Card.Description>
                                </Card.Content>
                                  <Card.Content extra>
                                    Velocidad del viento: {data.velocidad_tipo}, 
                                    Visibilidad: {data.visibilidad}, 
                                    {data.lluvia} lluvia,
                                    {data.calor} calor
                                  </Card.Content>
                            </Card>
                        )
                    })}

                </Card.Group>
            </div>
        )
    }