import "./Global.scss";
import Rectangl27 from "../../assets/Rectangle 27.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Global = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});
	return (
		<section className='global'>
			<div className='global__container wrapper'>
				<div className='global__header'>
					<h2 data-aos='zoom-in'>
						We are a global, boutique real estate brokerage
					</h2>
				</div>
				<div className='global__content'>
					<div className='global__left' data-aos='fade-right'>
						<h3>The transfer of real estate</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
							pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
							consectetur. Mattis elit adipiscing quisque tellus scelerisque
							vehicula ante nunc. Tellus consequat nisl quis nisl justo.
						</p>
						<a href='#' className='btn btn--dark'>
							Book Now
						</a>
						<a href='#' className='btn btn--light'>
							Read More
						</a>
						<div className='global__stats'>
							<p>
								<VisibilitySensor partialVisibility>
									{({ isVisible }) => (
										<div className='global__countUp'>
											{isVisible ? <CountUp end={1000} /> : null}+
										</div>
									)}
								</VisibilitySensor>
							</p>

							<span>Customers</span>
							<p>
								<VisibilitySensor partialVisibility>
									{({ isVisible }) => (
										<div className='global__countUp'>
											{isVisible ? <CountUp end={12} /> : null}+
										</div>
									)}
								</VisibilitySensor>
							</p>

							<span>Offices</span>
							<p>
								<VisibilitySensor partialVisibility>
									{({ isVisible }) => (
										<div className='global__countUp'>
											{isVisible ? <CountUp end={798} /> : null}+
										</div>
									)}
								</VisibilitySensor>
							</p>

							<span>Students</span>
						</div>
					</div>
					<div className='global__right' data-aos='fade-left'>
						<img src={Rectangl27} alt='Rectangl' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Global;
