import React from 'react';

const Fave = function(props) {
	var handleClick = function(e) {
		e.stopPropagation();
		props.onFaveToggle()
		console.log('HANDLING FAVE CLICK!');
	}
	const faveClass = (props.isFave) ? 
	'film-row-fave remove_from_queue' : 
	'film-row-fave add_to_queue';
	
	return (
		<div onClick={handleClick} className={faveClass} >
		  <p className="material-icons">{(props.isFave) ? 'remove_from_queue' : 'add_to_queue'}</p>
		</div>
	)
}

export default Fave;