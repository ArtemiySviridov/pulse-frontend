import './HomePage.scss';
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="main-layout">
			<main className="main-container">
				<div className="first-slide">
					<div className="first-slide__name">Волонтерство – это не только дать, но и получить</div>
					<div className="first-slide__slogan">
						<div>
							Пульс — уникальная платформа для молодежи, направленная на развитие социально значимых качеств и улучшения
							окружающей среды!
						</div>
					</div>
				</div>
				<div className="second-slide">
					<div className="second-slide__points">
						<div className="second-slide__points__head">
							Точка интереса
						</div>
						<div className="second-slide__points__photo">
						</div>
						<div className="second-slide__points__info">
							Точка интереса – место о котором ты мог не знать, но оно имеет шанс стать родным
						</div>
						<div className="second-slide__points__list">
							<div className="second-slide__points__list__item">
								<div className="item-logo">

								</div>
								<div className="item-header">
									Расширение
									возможностей
								</div>
								<div className="item-info">
									GoUP предлагает календарь
									мероприятий, которые помогут
									студентам и выпускникам
									университета обогатить свой
									опыт и активно участвовать в
									различных видах
								</div>
							</div>
						</div>
						<Link to="/points" className="second-slide__points__more-button">
							Увидеть все точки интереса
						</Link>
					</div>
				</div>
				<div className="third-slide">
					<div className="third-slide__events">
						<div className="third-slide__events__head">
							Мероприятия
						</div>
						<div className="third-slide__events__info">
							Мероприятия – то, где ты можешь познакомиться с новыми людьми, да я ебу че ты там еще можешь
						</div>
						<div className="third-slide__events__list">
							<div className="third-slide__events__list__item">
								<div className="item-day">
									<div className="item-day__day">
										30
									</div>
									<div className="item-day__day-name">
										авг
									</div>
								</div>
								<div className="item-logo">

								</div>
								<div className="item-header">
									Посадка деревьев
								</div>
								<div className="item-info">
									Посадка деревьев от эко-фабрики "Сибирский кедр" на празднике топора
								</div>
								<div className="item-footer">
									<div className="item-footer__bpm">
										3000 BPM
									</div>
									<button className="item-footer__button">
										Участвовать
									</button>
								</div>
							</div>
						</div>
						<Link to="/points" className="third-slide__events__more-events-button">
							Увидеть все мероприятия
						</Link>
					</div>
				</div>
				<div className="forth-slide">
					<div className="forth-slide__pulses">
						<div className="forth-slide__pulses__head">
							Пульсики
						</div>
						<div className="forth-slide__pulses__info">
							Пульсики – ты не останешься без награды, брат, я таво все, купи шавуху БЕЗЗУБО за баллы с пульсометра
							бабушки
						</div>
						<div className="forth-slide__pulses__list">
							<div className="forth-slide__pulses__list__item">
								<div className="item-logo">

								</div>
								<div className="item-header">
									Купон на шаурму БЕЗУМНО
								</div>
								<div className="item-pulse-footer">
									<div className="item-pulse-footer__bpm">
										3000 BPM
									</div>
									<button className="item-pulse-footer__button">
										Обменять
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
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

export default HomePage;
