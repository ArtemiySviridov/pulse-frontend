import { Outlet } from 'react-router-dom';
import './MainLayout.scss';
import { useRef } from "react";

export const MainLayout = () => {
	const dialogRef = useRef(null);

	const openMenu = () => {
		dialogRef.current.showModal(); // Открывает модальное окно
	};

	const closeMenu = () => {
		dialogRef.current.close(); // Закрывает модальное окно
	};
	return (
		<div className="main-layout">
			<main>
				<div className="header">
					<div className="header-container">
						<div className="header-logo">
							Пульс
						</div>
						<div className="header-nav">
							<div className="dropdown">
								<button onClick={openMenu} className="menu-button">
									Меню
								</button>
								<dialog ref={dialogRef} className="menu-dialog">
									<div className="menu-content">
										<button onClick={closeMenu} className="close-button">✖</button>
										<ul>
											<li><a href="#">Профиль</a></li>
											<li><a href="#">Настройки</a></li>
											<li><a href="#">Выход</a></li>
										</ul>
									</div>
								</dialog>
							</div>
						</div>
					</div>
				</div>
				<div className="outlet-container">
					<Outlet/>
				</div>
			</main>
		</div>
	);
};