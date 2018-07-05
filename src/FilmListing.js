import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
	render() {
		var allFilms = this.props.films.map((film) => {
			return <FilmRow film={film} key={film.id} />
		});
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				{allFilms}
			</div>
		)
	}
}

export default FilmListing;