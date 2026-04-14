import "./style.css";
import alienIcon from "../../assets/icons/alien-icon.svg";
import heartbeatIcon from "../../assets/icons/heartbeat-icon.svg";
import planetIcon from "../../assets/icons/planet-icon.svg";

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
						src={alienIcon}
						alt="Ícone de um alien"/>
					<p>{type}</p>
				</div>
				<div className="card-line">
					<img
						src={heartbeatIcon}
						alt="Ícone de batidas de um coração"/>
					<p>{status}</p>
				</div>
				<div className="card-line">
					<img
						src={planetIcon}
						alt="Ícone de um planeta"/>
					<p>{location}</p>
				</div>
			</div>
		</article>
	);
}

export default Card;
