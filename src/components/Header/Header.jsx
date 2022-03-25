import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './Header.css';

function Header() {
	return (
		<div className='container header__container'>
			<h5>You've met</h5>
			<h1>Foresight Uzochuchkwu</h1>
			<h5 className='text-light'>
				Fullstack Developer by day, writer/artist by night and well rounded
				enterprennuer
			</h5>
			<CTA />
			<HeaderSocials />
			<div className='me'>
				<img src={ME} alt='me' />
			</div>
			<a href='#contact' className='scroll__down'>
				Scroll Down
			</a>
		</div>
	);
}

export default Header;
