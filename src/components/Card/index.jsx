import "./style.css";

export const Card = ({ image, name, type, status, location }) => {

	return (
		<article>
			<img
				src={image}
				alt=""/>
			<h3>{name}</h3>
			<div className="card-description">
				<div className="card-line">
					<img
						src="/src/assets/icons/alien-icon.svg"
						alt="Ícone de um alien"/>
					<p>{type}</p>
				</div>
				<div className="card-line">
					<img
						src="/src/assets/icons/heartbeat-icon.svg"
						alt="Ícone de batidas de um coração"/>
					<p>{status}</p>
				</div>
				<div className="card-line">
					<img
						src="/src/assets/icons/planet-icon.svg"
						alt="Ícone de um planeta"/>
					<p>{location}</p>
				</div>
			</div>
		</article>
	);
}

export default Card;
