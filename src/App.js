import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {

	constructor(props) {
		super(props)
		this.handleFaveToggle = this.handleFaveToggle.bind(this);
		this.handleDetailsClick = this.handleDetailsClick.bind(this);
		this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
		this.state = {
			films: TMDB.films,
			faves: [],
			reviews: [],
			current: {}
		}
	}

	handleFaveToggle(film) {
		console.log("toggling fave");
		const faves = Array.from(this.state.faves);
		const filmIndex = faves.indexOf(film);

		(filmIndex > -1) ? faves.splice(filmIndex, 1) : faves.push(film);
		this.setState({faves});
	}

	handleDetailsClick(film) {
		console.log('Fetching details for ' + film);
		const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
		const reviews = (film.reviews.length) ? film.reviews : [];

		axios.get(url).then((results) => {
			this.setState({
				current: results.data,
				reviews: reviews
			})
		});
	}

	handleReviewSubmit(e) {
		e.preventDefault();
		const filmId = Number(e.target.film.value);
		const filmArrayCopy = Array.from(this.state.films);
		const filmIndex = filmArrayCopy.findIndex((film) => film.id === filmId);
		filmArrayCopy[filmIndex].reviews.push(e.target.review.value);
		e.target.review.value = '';
		const reviews = filmArrayCopy[filmIndex].reviews;

		this.setState({
			films: filmArrayCopy,
			reviews: reviews
		})
	}
	
	render() {
		const faveIds = [];
		this.state.faves.map((fave) => faveIds.push(fave.id))

		return (
		  <div className="film-library">
		      <FilmListing 
		      		onFaveToggle={this.handleFaveToggle} 
		      		faves={this.state.faves} 
		      		films={this.state.films}
		      		onDetailsClick={this.handleDetailsClick} />
		      <FilmDetails film={this.state.current}
		      			   onReviewSubmit={this.handleReviewSubmit}
		      			   reviews={this.state.reviews}
		      			   faveIds={faveIds} />
		  </div>
		);
	}
}

export default App;
