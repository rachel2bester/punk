import React, { useState} from "react";
import { BeerList } from "../BeerList/BeerList";
import Filters from "../Filters/Filters";

const Main = (props) => {
	const { baseURL, title } = props;
	const [name, setName] = useState("");
	const [hops, setHops] = useState("");
	const [yeast, setYeast] = useState("");
	const [malt, setMalt] = useState("");
	const [food, setFood] = useState("");
	const [url, setUrl] = useState(baseURL)
	
	
	const onNameChange = (event) => {
		setName(event.target.value);
	};
	
	const onHopsChange = (event) => {
		setHops(event.target.value);
	};
	
	const onYeastChange = (event) => {
		setYeast(event.target.value);
	};
	
	const onMaltChange = (event) => {
		setMalt(event.target.value);
	};
	
	const onFoodChange = (event) => {
		setFood(event.target.value);
	};

	const onRadioChange = (event) => {
		console.log(event.target.id)
		switch (event.target.id) {
			case "classic":
				setUrl(baseURL + "?brewed_before=01-2010");
				break;
	
			case "high-alc":
				setUrl(baseURL + "?abv_gt=6");
				break;
	
			case "acidic":
				break;
		
			default:
				setUrl(baseURL);
				break;
		}
		
    }

 	return (
		<>
			<h1>{title}</h1>
			<p>{url}</p>
			<Filters onRadioChange={onRadioChange} onNameChange={onNameChange} onHopsChange={onHopsChange} onYeastChange={onYeastChange} onMaltChange={onMaltChange} onFoodChange={onFoodChange} />
			<BeerList hops={hops} yeast={yeast} malt={malt} food={food} name={name} baseURL={url} />
		</>
  	);
};

export default Main;
