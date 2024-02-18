import "./Steps.scss";
import Message from "../../assets/messages.png";
import Quote from "../../assets/sms-tracking.png";
import Registred from "../../assets/edit-2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Steps = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	});
	return (
		<section className='steps'>
			<div className='steps__container wrapper'>
				<span data-aos='zoom-in'>Three steps. Three minutes.</span>
				<h2 data-aos='zoom-in'>Everything should be this easy.</h2>
				<div className='steps__content'>
					<div className='steps__question' data-aos='fade-right'>
						<img src={Message} alt='messages' />
						<h3>Answer questions</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
							bibendum in in vestibulum.
						</p>
					</div>
					<div className='steps__quote' data-aos='zoom-in-up'>
						<img src={Quote} alt='quote' />
						<h3>Select a quote</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
							bibendum in in vestibulum.
						</p>
					</div>
					<div className='steps__registred' data-aos='fade-left'>
						<img src={Registred} alt='registred' />
						<h3>Get registered</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
							bibendum in in vestibulum.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
