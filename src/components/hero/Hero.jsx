import "./Hero.scss";
import Final from "../../assets/Final ii 1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});
	return (
		<section className='hero'>
			<div className='wrapper'>
				<div className='hero__container'>
					<div className='hero__left' data-aos='fade-right'>
						<span>Welcome to Realstate</span>
						<h1>Manage Your Property</h1>
						<p>
							Your will have everything nearby supermarket, buses , station, the
							carmen neighborhood, etc
						</p>
						<div className='hero__quote'>
							<input type='email' placeholder='Enter your email' />
							<a href='#' className='btn btn--dark'>
								Get a Quote
							</a>
						</div>
					</div>
					<div className='hero__right' data-aos='fade-left'>
						<img src={Final} alt='final hous' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
