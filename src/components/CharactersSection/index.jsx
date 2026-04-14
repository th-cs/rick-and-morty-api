import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

export const CharactersSection = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios.get("https://rickandmortyapi.com/api/character")
			.then(response => {
				console.log(response.data.results)
				setCharacters(response.data.results)
			})
	}, []);

	return(
		<section className="main-content">
			<h2>
				Nossos <span>Personagens</span>
			</h2>
			<div className="main-cards">
				{
					characters.map((item) => (
						<Card
							image={item.image}
							name={item.name}
							type={item.species}
							status={item.status}
							location={item.origin.name}/>
					))
				}
			</div>
		</section>
	);
}

export default CharactersSection;
