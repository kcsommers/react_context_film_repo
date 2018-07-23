import React, { Component } from 'react';
import FilmRow from './FilmRow';
import FilmListingFilter from './FilmListingFilter';

class FilmListing extends Component {
	constructor(props) {
		super(props);
		this.handleFilterClick = this.handleFilterClick.bind(this);
		this.state = {
			filter: 'all'
		}
	}
	
	handleFilterClick(filter) {
		console.log('Setting filter to ' + filter);
		this.setState({
			filter
		})
	}

	render() {
		const safeArray = (this.state.filter === 'all') ? Array.from(this.props.films) : Array.from(this.props.faves);
		const allFilms = safeArray.map((film) => {
			return <FilmRow film={film} 
							key={film.id}
							onDetailsClick={() => this.props.onDetailsClick(film)}
							onFaveToggle={() => this.props.onFaveToggle(film)} 
							isFave={ (this.props.faves.indexOf(film) > -1) ? true : false } />
		});
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				<FilmListingFilter faves={this.props.faves} 
								   filter={this.state.filter} 
								   films={this.props.films}
								   onFilterClick={this.handleFilterClick} />
				{allFilms}
			</div>
		)
	}
}

export default FilmListing;
