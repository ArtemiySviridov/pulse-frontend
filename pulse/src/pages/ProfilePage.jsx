import './ProfilePage.scss'
import profilePhoto from '../assets/images/profile-photo.png';
import profileAch1 from '../assets/images/profile-ach1.png';
import profileAch2 from '../assets/images/profile-ach2.png';
import profileAch3 from '../assets/images/profile-ach3.png';

const ProfilePage = () => {
	return (
		<div className="main-layout">
			<main className="main-container">
				<div className="profile-container">
					<img src={profilePhoto} alt="Фото профиля" className="profile-container__photo" />
					<div className="profile-container__name">
						Иванов Иван Иванович
					</div>
					<div className="profile-container__info-rate">
						<div className="profile-container__points">
							<div className="points-text">
								Баллы ПУЛЬС:
							</div>
							<div className="points-count">
								3000 BPM
							</div>
						</div>
						<div className="profile-container__rating">
							<div className="rating-text">
								Место в рейтинге:
							</div>
							<div className="rating-count">
								52
							</div>
						</div>
					</div>
					<div className="profile-container__info">
						<div className="info-header">
							Обо мне
						</div>
						<div className="info-text">
							Активный и неравнодушный человек, стремлюсь помогать тем, кто нуждается в поддержке. Люблю работать в команде, готов вкладывать свое время и силы в добрые дела.						</div>
					</div>

					<div className="profile-container__achievements">
						<div className="achievements-header">
							Мои достижения
						</div>
						<div className="achievements-list">
							<div className="achievements-list__item">
								<img src={profileAch1} className="item-photo" />
								<div className="item-name">
									Первый шаг
								</div>
							</div>

							<div className="achievements-list__item">
								<img src={profileAch2} className="item-photo" />
								<div className="item-name">
									Друг животных
								</div>
							</div>

							<div className="achievements-list__item">
								<img src={profileAch3} className="item-photo" />
								<div className="item-name">
									Донор
								</div>
							</div>
						</div>
					</div>

					<button className="profile-container__button">
						Редактировать профиль
					</button>
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

export default ProfilePage;
