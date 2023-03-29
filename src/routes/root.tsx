import { Container, CssBaseline, Box } from '@mui/material'
import { MyHeader } from '../feature/header'
import { MyPlayer } from '../feature/player'
import { MyFooter } from '../feature/footer'
import appApi from '../App/api'
import { useEffect, useState } from 'react'
import { TGetPresets } from '../App/services/presets.services'

export const Root = () => {

	const [presets, setPresets] = useState<TGetPresets>()
	const[error, setError] = useState()

	useEffect(() => {
	appApi.getPresets('adviser/getPresets')
	.then(res => setPresets(res))
	.catch(error => setError(error))
	},[])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<CssBaseline />
			<MyHeader />
			<Container maxWidth="xl">
				<Box component="main" sx={{ pt: 10 }}>
					
					<MyPlayer src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} />
					<section>
						<h2>Особенности зрения дальтоника и эпилептика</h2>
						<p>
							Дальтонизм (цветовая слепота) — врожденное или приобретенное нарушение
							зрения, которое проявляется в неспособности глаза различать один или
							несколько основных цветов.
						</p>
						<p>
							Эпилепсия – хроническое неинфекционное заболевание головного мозга,
							поражающее людей в любом возрасте.
						</p>
					</section>
					<section>
						<h2>Как это работает?</h2>
						<div className="content-wrapper">
							<img className="lazy img-fluid" src="assets/images/2.jpeg" alt="" />
							<div className="list-wrapper">
								<dl>
									<dt>Анализ на слияние объектов, предобработка:</dt>
									<dd>1. Замена на ч/б цвет (оттенки) с узорчатой штриховкой</dd>
									<dd>2. Контурирование</dd>
								</dl>
								<dl>
									<dt>При эпилепсии:</dt>
									<dd>1. Размытие пестроты</dd>
									<dd>2. Выравнивание интенсивности пульсаров</dd>
									<dd>3. Стабилизация кадра</dd>
								</dl>
							</div>
						</div>
					</section>
					<section>
						<h2>Диагностика дальтонизма</h2>
						<div className="content-wrapper">
							<img className="lazy img-fluid" src="assets/images/1.jpeg" alt="" />
							<div className="list-wrapper">
								<dl>
									<dt>
										Для оценки функции и дефектов цветового зрения человека используют три
										типа методов:
									</dt>
									<dd>1.спектр-ассоциированные;</dd>
									<dd>2.электрофизиологические;</dd>
									<dd>3.табличные.</dd>
								</dl>
							</div>
						</div>
						<p>
							Классический метод установления дальтонизма – это таблицы Рабкина. Они
							позволяют определить, какой цвет человек не замечает и насколько выражено
							это нарушение (соотнесение к трем степеням – А, В и С).
						</p>
						<p>
							Как определить дальтонизм по таблицам Рабкина? Диагностические таблицы
							офтальмолога Рабкина составлены таким образом, чтобы кольца, которые
							имеют разный цвет, были одинаковы по яркости и насыщенности. Кольца
							группируются в фигуры и цифры. Последние являются «ловушками», т.к.
							человек с расстроенным цветовосприятием не может некоторые из них
							отдифференцировать правильно. Тот цвет, в котором возникает ошибка,
							соответствует проблемному типу пигмента.
						</p>
						<p>
							Результаты теста Рабкина оцениваются следующим образом. При нормальном
							колор-восприятии все 25 таблиц будут названы правильно, аномальный
							трихромат типа С – узнает более 12 таблиц, дихромат (дальтоник) – 7–9
							таблиц. Из инструментальных методов исследования дальтонизма могут
							применяться хроматическая периметрия и электроретинография.
						</p>
					</section>

					<section>
						<h2>Проблематика</h2>
						<div className="content-wrapper">
							<img className="lazy img-fluid" src="assets/images/3.jpeg" alt="" />
							<div className="list-wrapper">
								<dl>
									<dt>8 видов дальтонизма:</dt>
									<dd>1.Нормальное зрение - 92%</dd>
									<dd>2.Дейтераномалия - 2.7%</dd>
									<dd>3.Протаномалия - 0.66%</dd>
									<dd>4.Протанопия - 0.59%</dd>
									<dd>5.Дейтеранопия - 0.56%</dd>
									<dd>6.Тританопия - 0.016%</dd>
									<dd>7.Тританомалия - 0.01%</dd>
									<dd>8.Ахроматопсия - менее 0.0001%</dd>
								</dl>
							</div>
						</div>
						<p>
							Патогенетическое лечение дальтонизма не разработано. Однако в настоящее
							время созданы специальные устройства, которые помогают людям с цветовыми
							аномалиями нормально жить и работать. Эти портативные приборы
							воспринимаемое серо-шкальное изображение трансформируют в цветное.
						</p>
					</section>
				</Box>
			</Container>
			<MyFooter />
		</Box>
	)
}
