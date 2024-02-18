import "./Project.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangl1 from "../../assets/Rectangle 19.png";
import Rectangl2 from "../../assets/Rectangle 20.png";
import Rectangl3 from "../../assets/Rectangle 21.png";
import Card from "./components/card/Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});

	function SampleNextArrow({ className, style, onClick }) {
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "red" }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow({ className, style, onClick }) {
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "green" }}
				onClick={onClick}
			/>
		);
	}

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrow: true,
		nextArrow: <FaChevronRight />,
		prevArrow: <FaChevronLeft />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};
	return (
		<section className='projects'>
			<div className='projects__container wrapper'>
				<div className='projects__header'>
					<span data-aos='zoom-in'>Best Project of the Years</span>
					<h2 data-aos='zoom-in'>Our recent projects</h2>
				</div>
				<div className='projects__content'>
					<div className='slider-container' data-aos='fade-up'>
						<Slider {...settings}>
							<Card
								img={Rectangl1}
								title={"Sobha Hearland II Villas"}
								description={
									"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum"
								}
							/>

							<Card
								img={Rectangl2}
								title={"Sobha Hearland II Villas"}
								description={
									"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum"
								}
							/>

							<Card
								img={Rectangl3}
								title={"Sobha Hearland II Villas"}
								description={
									"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum"
								}
							/>

							<Card
								img={Rectangl3}
								title={"Sobha Hearland II Villas"}
								description={
									"Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum"
								}
							/>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
