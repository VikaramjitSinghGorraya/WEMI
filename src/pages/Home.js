import {
	VStack,
	Input,
	FormControl,
	Button,
	HStack,
	Image,
	Text,
	FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../icons/favicon.svg';
import Header from '../components/Header';
const Home = () => {
	const [userInfo, setUserInfo] = useState({
		displayName: '',
		displayDate: '',
	});
	const [userError, setUserError] = useState(false);
	const [dateError, setDateError] = useState(false);

	const inputChangeHandler = (e) => {
		if (userError) setUserError(false);
		if (dateError) setDateError(false);
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	const submitForm = async (e) => {
		console.log(userInfo.displayName.length);
		e.preventDefault();
		if (userInfo.displayName.length < 2 || userInfo.displayName.length > 20) {
			setUserError(true);
			return;
		}
		console.log(new Date().toJSON().slice(0, 10).replace(/-/g, '-'));
		console.log(userInfo.displayDate);

		if (
			userInfo.displayDate < new Date().toJSON().slice(0, 10).replace(/-/g, '-')
		) {
			setDateError(true);
			return;
		}
		const authenticated = await axios.post(
			'https://wemi-round2-server.herokuapp.com/round2/authentication',
			userInfo
		);

		if (authenticated.data.access_token) {
			localStorage.setItem('name', userInfo.displayName);
			localStorage.setItem('date', userInfo.displayDate);
			localStorage.setItem('token', authenticated.data.access_token);
			window.location.href = '/products';
		}
	};
	const userFormDisplay = () => {
		return (
			<VStack spacing={5} w='30%' h='fit-content' position='relative'>
				<Image src={logo} alt='Logo' />
				<form style={{ height: '100%' }}>
					<Input
						type='text'
						value={userInfo.displayName}
						name='displayName'
						textAlign='center'
						border='none'
						borderBottom='1px solid black'
						borderRadius='0'
						placeHolder='Username'
						onChange={inputChangeHandler}
						fontSize='18px'
					/>
					{userError ? (
						<Text textAlign='center' as='p' color='red' fontSize='10px'>
							Username must be between 2 to 20 characters in length.
						</Text>
					) : (
						''
					)}

					<Input
						type='date'
						value={userInfo.displayDate}
						name='displayDate'
						textAlign='center'
						border='none'
						borderBottom='1px solid black'
						borderRadius='0'
						placeHolder='Date'
						onChange={inputChangeHandler}
						fontSize='18px'
					/>
					{dateError ? (
						<Text textAlign='center' as='p' color='red' fontSize='10px'>
							You cannot select previous date.
						</Text>
					) : (
						''
					)}
					<Button
						onClick={submitForm}
						bg='#2CD889'
						color='white'
						w='100%'
						fontSize='18px'
						my='5'
					>
						Get Token
					</Button>
				</form>
			</VStack>
		);
	};
	return (
		<VStack w='100%' h='100%'>
			<Header heading='WELCOME TO WEMI ROUND 2' fontSize='18px' />
			<VStack w='100%' h='100%' justifyContent='center' bg='#F0FAF8'>
				{userFormDisplay()}
			</VStack>
		</VStack>
	);
};

export default Home;
