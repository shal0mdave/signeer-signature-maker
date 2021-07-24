
import GithubLink from './GithubLink';
import GetStartedButton from './GetStartedButton';

const Nav = () => {

	return (
		<nav>
			<div className="container">
				<input type="checkbox" id="nav-check"/>
				<div className="nav-header">
					<div className="nav-logo">
						<img src={`/img/logo.svg`} alt="Signeer" />
					</div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<div className="nav-links">
					<GithubLink />
					<GetStartedButton />
				</div>
			</div>
		</nav>
	)
}

export default Nav;