import React from 'react';
import { HStack, Text, Box, Link, Image } from '@chakra-ui/react';
import mail from '../icons/mail.svg';
import phone from '../icons/phone.svg';
import git from '../icons/github.svg';
const Footer = () => {
	return (
		<HStack
			w='100%'
			color='#4CA07A'
			justifyContent='space-around'
			fontSize='18px'
		>
			<HStack alignItems='base'>
				<Image src={mail} alt='email' />
				<Link
					_hover={{ textDecoration: 'none' }}
					isExternal
					href='mailto:vikaramjitgoraya01@gmail.com'
				>
					vikaramjitgoraya01@gmail.com
				</Link>
			</HStack>
			<HStack alignItems='base'>
				<Image src={phone} alt='phone' />
				<Text as='p'>902-943-0518</Text>
			</HStack>
			<HStack alignItems='base'>
				<Image src={git} alt='githubLink' />
				<Link
					_hover={{ textDecoration: 'none' }}
					isExternal
					href='https://github.com/VikaramjitSinghGorraya'
					as='p'
				>
					Github
				</Link>
			</HStack>
		</HStack>
	);
};

export default Footer;
