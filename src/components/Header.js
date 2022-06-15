import React from 'react';
import { HStack, Image, Text, VStack, Divider } from '@chakra-ui/react';
import logo from '../icons/favicon.svg';
const Header = ({ heading, date }) => {
	return (
		<HStack color='#646D82' w='100%' justifyContent='space-between' p='5'>
			<HStack>
				<Image src={logo} alt='Logo' onClick={(window.location.href = '/')} />
				<VStack px='5'>
					<Text as='p' fontSize='18px'>
						{heading}
					</Text>
					{!date ? (
						<HStack w='100%'>
							<Divider minH='100%' borderColor='#2CD889' borderWidth='2px' />
						</HStack>
					) : (
						''
					)}
				</VStack>
			</HStack>
			<Text as='p' fontSize='18px'>
				{date ? date : ''}
			</Text>
		</HStack>
	);
};

export default Header;
