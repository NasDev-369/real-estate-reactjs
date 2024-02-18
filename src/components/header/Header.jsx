import "./Header.scss";
import { FaSistrix } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<section className='header'>
			<div className='header__container wrapper'>
				<div className='header__bg'>
					<a
						href='#'
						className='header__logo'
						onClick={() => setShowNav(false)}>
						<img src={Logo} alt='logo' />
					</a>
					<ul className={`${showNav ? "show" : ""}`}>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>About us</a>
						</li>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>Projects</a>
						</li>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>Agents</a>
						</li>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>Services</a>
						</li>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>Listings</a>
						</li>
						<li onClick={() => setShowNav(false)}>
							<a href='#'>
								<FaSistrix />
							</a>
						</li>
					</ul>
					<div className='header__contact'>
						<a href='#'>Other services</a>
						<a href='#' className='btn btn--light'>
							Contact Us
						</a>
					</div>

					<div
						className='header__menu-btn'
						onClick={() => setShowNav(!showNav)}>
						{showNav ? <IoMdClose /> : <IoMenu />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
