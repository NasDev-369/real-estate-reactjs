import "./Rating.scss";
import { IoMdStar } from "react-icons/io";

export const Rating = ({
	rating,
	hover,
	onRatingChange,
	onMouseEnter,
	onMouseLeave,
}) => {
	const handleStarClick = (value) => {
		onRatingChange(value);
	};

	const handleStarMouseEnter = (value) => {
		onMouseEnter(value);
	};

	const handleStarMouseLeave = () => {
		onMouseLeave();
	};

	return (
		<div className='rating'>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<label key={index} onClick={() => handleStarClick(ratingValue)}>
						<IoMdStar
							htmlFor={`star${ratingValue}`}
							style={{
								color: ratingValue <= (hover | rating) ? "gold" : "#ccc",
							}}
							onMouseEnter={() => handleStarMouseEnter(ratingValue)}
							onMouseLeave={() => handleStarMouseLeave()}
						/>
					</label>
				);
			})}
		</div>
	);
};
