import { VStack } from '@chakra-ui/react';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<>
			<VStack h='98vh' w='90%' m='auto'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
				</Routes>
			</VStack>
		</>
	);
}

export default App;
