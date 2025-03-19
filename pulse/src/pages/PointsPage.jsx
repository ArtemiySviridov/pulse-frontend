import './PointsPage.scss'
import {Link} from "react-router-dom";

const PointsPage = () => {
	return (
		<div className="main-layout">
			<main className="main-container">
				<div className="points-header">
					Точки интереса
				</div>
				<div className="points-list">
					<Link to='/point'>
						<div className="points-item">
							<div className="points-item-container">
								<div className="points-item-container__img">

								</div>
								<div className="points-item-container__info-header">
									ул. Советская 29
								</div>
							</div>
							<div className="points-item__info">
								Дом деревянный двухэтажный, прямоугольный в плане, с выступом лестничного тамбура...
							</div>
						</div>
					</Link>
					<div className="points-item">
						<div className="points-item-container">
							<div className="points-item-container__img">

							</div>
							<div className="points-item-container__info-header">
								Лагерный сад
							</div>
						</div>
						<div className="points-item__info">
							Живописное место, расположенное вдоль правого берега реки Томь в Ленинском районе города
						</div>
					</div>

					<div className="points-item">
						<div className="points-item-container">
							<div className="points-item-container__img">

							</div>
							<div className="points-item-container__info-header">
								Набережная Томи
							</div>
						</div>
						<div className="points-item__info">
							Живописное место, расположенное вдоль правого берега реки Томь в Ленинском районе города
						</div>
					</div>

					<div className="points-item">
						<div className="points-item-container">
							<div className="points-item-container__img">

							</div>
							<div className="points-item-container__info-header">
								Лагерный сад
							</div>
						</div>
						<div className="points-item__info">
							Живописное место, расположенное вдоль правого берега реки Томь в Ленинском районе города
						</div>
					</div>
					 <button className="add-point-button">
						 Добавить точку
					 </button>
				</div>
				<div className="footer-points">
					<div className="footer__head">
						Пульс
					</div>
					<div className="footer__contacts">
						Контакты
					</div>
					<div className="footer__tg">
						@pulse
					</div>
				</div>
				<div className="after-footer">
					© 2025 Онлайн-платформа "Пульс"
				</div>
			</main>
		</div>
	);
};

export default PointsPage;