import React from "react";
import AnimatedNumber from "animated-number-react";


const Temperature = (props) => {
	const { actualTemperature, maxTemperature, minTemperature } = props.data;
	
	const formatValue = (value) => value.toFixed(0);
	
	return (<div className="temperature">
		<div className="temperature__deg">
			<AnimatedNumber
				value={ parseInt(actualTemperature) }
				formatValue={ formatValue }
			/>
		</div>
		<div className="temperature__wrap">
			<div className="temperature__mesure">&deg;C</div>
		
		</div>
	</div>);
}


export default Temperature;