import {Link, Outlet} from 'react-router-dom';
import './MainLayout.scss';
import burgerButton from '../assets/images/burger-button.png'
import { useState } from 'react';

export const MainLayout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="main-layout">
			<main>
				<div className="header">
					<div className="header-container">
						<Link to='/' className="logo-link">
							<div className="header-logo">
								Пульс
							</div>
						</Link>
						<div className="header-nav">
							<div className="dropdown">
								<button className="menu-button" onClick={toggleMenu}>
									<img src={burgerButton} alt="menu-button" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="outlet-container">
					<Outlet/>
				</div>
				{isMenuOpen && (
					<div className="modal-overlay" onClick={closeMenu}>
						<div className="modal" onClick={(e) => e.stopPropagation()}>
							<button className="close-button" onClick={closeMenu}>×</button>
							<nav className="modal-menu">
								<ul>
									<li><Link className="link" to="/profile" onClick={closeMenu}>Личный кабинет</Link></li>
									<li><Link className="link" to="/points" onClick={closeMenu}>Точки интереса</Link></li>
									<li>Мероприятия</li>
									<li>Блог</li>
									<li>Магазин баллов</li>
									<li>О нас</li>
									<li>Контакты</li>
									<li>Зафиксировать активность</li>
								</ul>
							</nav>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};