import React, { useEffect, useState } from 'react';
import { Text, VStack, Heading, HStack, Button } from '@chakra-ui/react';
import Header from '../components/Header';
import axios from 'axios';
import Dataset from '../components/Dataset.json';
const Products = () => {
	const [productInfo, setProductInfo] = useState([]);
	const health = [];
	const finance = [];
	const technology = [];

	useEffect(() => {
		Dataset.map((data, index) => {
			if (data.category === 'Health Care') health.push(data);
			if (data.category === 'Finance') finance.push(data);
			if (data.category === 'Technology') technology.push(data);
			console.log(finance);
		});
	}, []);
	const displayProducts = () => {
		// const products = await axios.post(
		// 	'https://wemi-round2-server.herokuapp.com/round2/get-products',
		// 	{
		// 		headers: {
		// 			Authorization: `Bearer${localStorage.getItem('token')}`, //the token is a variable which holds the token
		// 		},
		// 	}
		// );
		// console.log(products);
		return (
			<VStack color='#4CA07A' w='100%' alignItems='flex-start'>
				<Heading fontSize='28px'>Products</Heading>
				<HStack>
					<VStack>
						<Heading textDecoration='underline' fontSize='28px'>
							Finance
						</Heading>

						{finance.map((item, index) => (
							<Text as='p' key='index'>
								{finance[0].name}
							</Text>
						))}
					</VStack>
				</HStack>
			</VStack>
		);
	};
	return (
		<VStack w='100%' h='100%'>
			<Header
				heading={localStorage.getItem('name')}
				date={localStorage.getItem('date')}
				fontSize='18px'
			/>
			<VStack w='100%' h='100%' bg='#F0FAF8'>
				{displayProducts()}
			</VStack>
		</VStack>
	);
};

export default Products;
