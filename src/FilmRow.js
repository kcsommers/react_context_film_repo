import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
	render() {
		let releaseDate = new Date(this.props.film.release_date).getFullYear();
		return (
			<div className="film-row">
				<FilmPoster film={this.props.film} />

				<div className="film-summary">
					<h1>{this.props.film.title}</h1>
					<p>{releaseDate}</p>
				</div>
			</div>
		)
	}
}

export default FilmRow;
