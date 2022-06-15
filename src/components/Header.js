import React from 'react';
import { HStack, Image, Text, VStack, Divider } from '@chakra-ui/react';
import logo from '../icons/favicon.svg';
const Header = ({ heading, date }) => {
	return (
		<HStack color='#646D82' w='100%' p='5'>
			<Image src={logo} alt='Logo' />
			<VStack px='5'>
				<Text as='p' fontSize='18px'>
					{heading}
				</Text>
				<HStack w='100%'>
					<Divider minH='100%' borderColor='#2CD889' borderWidth='2px' />
				</HStack>
			</VStack>
			{date ? date : ''}
		</HStack>
	);
};

export default Header;
