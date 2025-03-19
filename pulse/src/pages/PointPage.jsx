import './PointPage.scss'

const PointsPage = () => {
	return (
		<div className="main-layout">
			<main className="main-container">
				<div className="profile-info">
					<div className="point-header">
						ул. Советская 29
					</div>
					<div className="point-photo">

					</div>
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