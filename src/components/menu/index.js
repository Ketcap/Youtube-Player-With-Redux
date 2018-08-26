import React, { Component } from 'react'

import Style from './index.module.scss';

import MenuItem from '../menu_item';

import Icon from 'react-icons-kit';
import { menu as menuIcon, home, star, list } from 'react-icons-kit/feather/';

import Youtube from '../../public/img/youtube.png';

class Menu extends Component {
	state = {
		menu: true
	}
	toggleMenu = () => {
		this.setState(prev => ({
			menu: !prev.menu
		}))
	}
	render() {
		const { menu } = this.state;
		return (
			<div className={`${Style.menu} ${!menu ? Style.menuClose : ''}`}>
				<Icon onClick={this.toggleMenu} icon={menuIcon} size={24} className={Style.menuIcon} />
				<div className={Style.logo}>
					<img alt="youtube" src={Youtube} />
				</div>
				<div className={Style.list}>
					<MenuItem icon={home} title={'Homepage'} link={'/'} />
					<MenuItem icon={star} title={'Trending'} link={'/'} />
					<MenuItem icon={list} title={'History'} link={'/'} />
				</div>
			</div>
		)
	}
}
export default Menu