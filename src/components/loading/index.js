import React from 'react';
import Loading from '../../public/icon/loading.svg';
import Style from './index.module.scss';

export default (params) => {
	return (
		<div className={Style.loading}>
			<img src={Loading} alt='loading' />
		</div>
	)
}
