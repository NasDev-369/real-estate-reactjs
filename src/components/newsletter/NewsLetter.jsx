import "./NewsLetter.scss";
import ThreeDRendering from "../../assets/3d-rendering-isometric-fdgdf 1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NewsLetter = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});
	return (
		<section className='newsletter'>
			<div className='wrapper'>
				<div className='newsletter__container'>
					<div className='newsletter__left' data-aos='fade-right'>
						<h2>Subscribe Our Newsletter</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
							pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
							consectetur. Mattis elit adipiscing quisque tellus scelerisque
							vehicula ante nunc.
						</p>
						<div className='newsletter__quote'>
							<input type='email' placeholder='Enter your email' />
							<a href='#' className='btn btn--dark'>
								Get a Quote
							</a>
						</div>
					</div>
					<div className='newsletter__right' data-aos='fade-left'>
						<img src={ThreeDRendering} alt='final hous' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsLetter;
