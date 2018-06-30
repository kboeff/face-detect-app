import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma3 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 70, width: 70 }} >
		 <div className="Tilt-inner">
		 	<img style={ {paddingTop: '10px'} } src={brain} alt='logo' />
		 </div>
		</Tilt>
		</div>
		)
}

export default Logo;