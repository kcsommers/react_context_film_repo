import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = function(props) {
	let releaseDate = new Date(props.film.release_date).getFullYear();
	let reviewIcon = (props.film.reviews.length) ?
					<p className="material-icons">insert_comment</p>
					:
					<p className="no-reviews">No Reviews Yet</p>

	return (
		<div onClick={props.onDetailsClick} className="film-row">
			<FilmPoster film={props.film} />

			<div className="film-summary">
				<h1>{props.film.title}</h1>
				<p>{releaseDate}</p>
			</div>
			<div className="reviewIcon">
				{reviewIcon}
			</div>
			<Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
		</div>
	)
}

export default FilmRow;
