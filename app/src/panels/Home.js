import React from 'react';
import PropTypes from 'prop-types';
import {
	Panel,
	PanelHeader,
	Group,
	Cell,
	Div,
	Avatar,
	Button,
	Header,
	Gallery,
	FixedLayout
} from '@vkontakte/vkui';
import '../css/Home.css';
import smile1 from '../img/smile1.png';
import smile2 from '../img/smile2.jpg';
import smile3 from '../img/smile3.png';
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}		
		<PanelHeader ><span>Твой подарок</span></PanelHeader>
		
			<Div className="fullHeight home-gallery">		
				<Gallery slideWidth="100%" bullets="dark" style={{textAlign:'center',height: 'auto'}}>
					<div>
						<img src={smile1} className="home-galery__img" alt="Выбор подарка"/>
						<Div className="home-galery__descr">Скоро праздник у друзей или близких?<br/>А выбор подарка - сложное занятие?</Div>
					</div>
					<div>
						<img src={smile2} className="home-galery__img" alt="Выбор подарка"/>
						<Div className="home-galery__descr">Мы поможем подобрать креативный презент<br/>и подкинем несколько интересных идей.</Div>
					</div>
					<div>
						<img src={smile3} className="home-galery__img" alt="Выбор подарка"/>
						<Div className="home-galery__descr">Ответьте на 6 простых вопросов и получите на выбор<br/> несколько крутых вариантов , чтобы порадовать своих близких</Div>
					</div>
				</Gallery>			
			</Div>
		
		<FixedLayout vertical="bottom" className="controls">
			<Div>
				<Button mode="commerce" size="xl" align="center" className="anButton" onClick={go} data-to="persik" style={{ backgroundColor: 'var(--button_commerce_background)', height: '52px' }} >
					<strong> Приступить к выбору подарка		</strong>
				</Button>
			</Div>
		</FixedLayout>
		
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
