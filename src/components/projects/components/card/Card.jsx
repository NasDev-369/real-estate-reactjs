import "./Card.scss";
import { useState } from "react";

import { Rating } from "../rating/Rating";

const Card = ({ img, title, description }) => {
	const [rating, setRating] = useState(5);
	const [hover, setHover] = useState(null);

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleMouseEnter = (value) => {
		setHover(value);
	};

	const handleMouseLeave = () => {
		setHover(null);
	};

	return (
		<div className='card'>
			<img src={img} alt='Hous 1' />
			<div className='card__content'>
				<h3>{title}</h3>
				<p>{description}</p>
				<Rating
					rating={rating}
					hover={hover}
					onRatingChange={handleRatingChange}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			</div>
		</div>
	);
};

export default Card;
