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

 	return (
		<>
			<p>{title}</p>
			<Filters onNameChange={onNameChange} onHopsChange={onHopsChange} onYeastChange={onYeastChange} onMaltChange={onMaltChange} onFoodChange={onFoodChange} />
			<p>{name}</p>
			<BeerList title="Beers" hops={hops} yeast={yeast} malt={malt} food={food} name={name} baseURL={baseURL} />
		</>
  	);
};

export default Main;
