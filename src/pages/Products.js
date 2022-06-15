import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const Products = () => {
	const [productInfo, setProductInfo] = useState([]);

	const fetchProducts = async () => {
		const products = await axios.post(
			'https://wemi-round2-server.herokuapp.com/round2/get-products',
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'), //the token is a variable which holds the token
				},
			}
		);
		console.log(products);

		console.log(products);
		// Dataset.map((data, index) => {
		// 	if (data.category === 'Health Care') health.push(data);
		// 	if (data.category === 'Finance') finance.push(data);
		// 	if (data.category === 'Technology') technology.push(data);
		// });
		// console.log(health);
		// console.log(finance);
		// console.log(technology);
	};
	return <div>{fetchProducts()}</div>;
};

export default Products;
