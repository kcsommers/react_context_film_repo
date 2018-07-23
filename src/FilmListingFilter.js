import React, { Component } from 'react';

class FilmListingFilter extends Component {
	render() {
		const allClasses = (this.props.filter === 'all') ? 'film-list-filter is-active' : 'film-list-filter';
		const favesClasses = (this.props.filter === 'faves') ? 'film-list-filter is-active' : 'film-list-filter';
		return(
			<div className="film-list-filters">
		        <div onClick={() => this.props.onFilterClick('all')} className={allClasses}>
		            ALL
		            <span className="section-count">{this.props.films.length}</span>
		        </div>
		        <div onClick={() => this.props.onFilterClick('faves')} className={favesClasses}>
		            FAVES
		            <span className="section-count">{this.props.faves.length}</span>
		        </div>
	        </div>
		    
		)
	}
}


export default FilmListingFilter;