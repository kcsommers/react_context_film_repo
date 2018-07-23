import React from 'react';

const Review = function(props) {
	let title = (props.reviews.length) ? <h2>Reviews</h2> : '';
	return (
		<div className="reviews">
			{title}
			{
				props.reviews.map((review, i) => <div key={i} className="review"><p>{review}</p></div>)
			}

			<h2>Add a Review</h2>
		  	<form onSubmit={props.onReviewSubmit}>	
		  		<textarea name="review"></textarea>
		  		<input readOnly hidden type="text" name="film" value={props.film.id} />
				<input type="submit" />
		  	</form>
		</div>
	)
}

export default Review