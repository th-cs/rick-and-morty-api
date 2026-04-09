import "./style.css";

export const Main = () => {
	return(
		<main>
			<img
				src="/src/assets/images/rick-img.png"
				alt="Imagem do Rick"/>
			<div className="main-content">
				<img
					src="/src/assets/icons/rick-and-morty-logo.svg"
					width="430px"
					height="126px"
					alt="Logo de Rick and Morty"/>
				<h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
				<p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
				<div className="main-container-btn">
					<a
						href="#"
						className="btn-primary">Veja agora</a>
					<a
						href="#"
						className="btn-secondary">Saiba mais</a>
				</div>
			</div>
		</main>
	);
}

export default Main;
