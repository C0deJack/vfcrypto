import React from 'react';
import loadingSvg from '../../assets/loading.svg';
import './Loading.scss';


const Loading = () => {

	return (
		<div className='loading'>
			<h3>LOADING</h3>
			<img alt='loading icon' src={loadingSvg} />
		</div>
	);
};

export default Loading;
