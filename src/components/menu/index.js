import React, { Component } from 'react'

import Style from './index.module.scss';

import MenuItem from '../menu_item';

import HomeIcon from '../../public/icon/home_icon.svg';
import StarIcon from '../../public/icon/star_icon.svg';
import History from '../../public/icon/history.svg';

import Youtube from '../../public/img/youtube.png';

class Menu extends Component {
	render() {
		return (
			<div className={Style.menu}>
				<div className={Style.logo}>
					<img alt="youtube" src={Youtube} />
				</div>
				<div className={Style.list}>
					<MenuItem icon={HomeIcon} title={'Homepage'} link={'/'} />
					<MenuItem icon={StarIcon} title={'Trending'} link={'/'} />
					<MenuItem icon={History} title={'History'} link={'/'} />
				</div>
			</div>
		)
	}
}
export default Menu