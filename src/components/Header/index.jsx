import "./style.css";

export const Header = () => {
	return (
		<header>
			<a
				href="https://github.com/th-cs/"
				target="_blank">
				<span>TH-CS</span>
				<img
					src="/src/assets/icons/github-icon.svg"
					width="40px"
					height="40px"
					alt="Logo do GitHub"/>
			</a>
		</header>
	);
}

export default Header;
