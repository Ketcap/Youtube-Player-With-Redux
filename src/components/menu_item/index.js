import React from 'react';
import { Link } from 'react-router-dom'

import Style from './index.module.scss';

export default ({ link, icon, title }) => {
	return (
		<Link to={link} className={Style.link}>
			<img alt={title} src={icon} className={Style.icon} />
			<span className={Style.title}>{title}</span>
		</Link>
	)
}
