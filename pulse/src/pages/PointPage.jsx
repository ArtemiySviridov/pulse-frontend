import './PointPage.scss'
import point from '../assets/images/point.png'
import same from '../assets/images/same.png'

const PointsPage = () => {
	return (
		<div className="main-layout">
			<main className="main-container">
				<div className="profile-info">
					<div className="point-header">
						ул. Советская 29
					</div>
					<img src={point} className="point-photo" />
					<div className="point-info">
						<div className="point-info__tag">
							Описание
						</div>
					</div>

					<div className="point-donates">
						<div className="point-donates__header">
							Благотворительность
						</div>
						<div className="point-donates__target">
							Цель сбора: реставрация
						</div>
						<div className="point-donates__progress-bar">
							<div className="point-donates__progress__fill">
								<span className="progress-text">75 000 / 100 000 (руб.)</span>
							</div>
						</div>
						<div className="point-donates__button">
							Пожертвовать
						</div>
					</div>

					<div className="point-same">
						<div className="point-same__header">
							Похожие точки
						</div>
						<div className="point-same__list">
							<div className="point-same__item">
								<img src={same} className="item-photo" />
								<div className="item-name">
									ул. Советская 29
								</div>
							</div>

							<div className="point-same__item">
								<img src={same} className="item-photo"/>
								<div className="item-name">
									ул. Советская 29
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-point">
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