import { Box, Text } from '@chakra-ui/react'

const Logo = ({ ...props }) => {
	return (
		<Text
			color='#1e94f3'
			fontWeight={700}
			fontSize='30px'
			lineHeight='38px'
			{...props}
			fontFamily='Roboto'
			border={'3px solid #1e94f3'}
			p={'5px'}
			borderRadius={'12px'}
		>
			QR_CODE
		</Text>
	)
}
export default Logo
