import React from 'react';
import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit';

import Style from './index.module.scss';

export default ({ link, icon, title }) => {
	return (
		<Link to={link} className={Style.link}>
			<Icon icon={icon} className={Style.icon} size={20} />
			<span className={Style.title}>{title}</span>
		</Link>
	)
}
