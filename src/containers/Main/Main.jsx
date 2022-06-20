import React, { useEffect, useState} from "react";
import { BeerList } from "../BeerList/BeerList";
import Filters from "../Filters/Filters";
import "./Main.scss"

const Main = (props) => {
	const {startTitle, baseURL , start} = props;
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState(baseURL)
	const [nextPageURL, setNextPageURL] = useState("")
	const [title, setTitle] = useState(startTitle)
	const [checked, setChecked] = useState(start)

	const [searchTerm, setSearchTerm] = useState("");
	const [searchType, setSearchType] = useState("name");

	const onSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const onSearchTypeChange = (event) => {
		setSearchType(event.target.value);
	};

	const handlePageInc = () => {
		setPage(page + 1)
	}

	const handlePageDec = () => {
		setPage(page - 1)
	}

	const pageReset = () => {
		setPage(1)
	}

	useEffect(() => {
		console.log(nextPageURL)
	}, [nextPageURL])

	const onRadioChange = (event) => {
		setChecked(event.target.id)
		switch (event.target.id) {
			case "classic":
				setUrl(baseURL + "?brewed_before=01-2010");
				setTitle("Classic Beers")
				break;
	
			case "high-alc":
				setUrl(baseURL + "?abv_gt=6");
				setTitle("High Alcohol Beers")
				break;
	
			case "acidic":
				setUrl(baseURL + "?acidic");
				setTitle("High Acidity Beers")
				break;
		
			default:
				setUrl(baseURL);
				setTitle("All Beers")
				break;
		}
    }

 	return (
		<div className="main">
			<h1 className="main__heading">{title}</h1>
			<Filters checked={checked} nextPageURL={nextPageURL} handlePageDec={handlePageDec} handlePageInc={handlePageInc} page={page} searchType={searchType} onSearchTypeChange={onSearchTypeChange} onSearchTermChange={onSearchTermChange} onRadioChange={onRadioChange} />
			<BeerList  setNextPageURL={setNextPageURL} page={page} pageReset={pageReset} searchType={searchType} searchTerm={searchTerm} baseURL={url} />
		</div>
  	);
};

export default Main;
