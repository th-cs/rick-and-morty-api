import "./style.css";
import githubIcon from "../../assets/icons/github-icon.svg";

export const Header = () => {

	return (
		<header>
			<a
				href="https://github.com/th-cs/"
				target="_blank">
				<span>TH-CS</span>
				<img
					src={githubIcon}
					width="40px"
					height="40px"
					alt="Logo do GitHub"/>
			</a>
		</header>
	);
}

export default Header;
