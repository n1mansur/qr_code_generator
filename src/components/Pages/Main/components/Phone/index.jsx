import { Box } from '@chakra-ui/react'
import styles from './styles.module.scss'
import { useQRCode } from 'next-qrcode';

const Phone = ({value}) => {
	const { Canvas } = useQRCode();
	
	return (
		<Box className={styles.phone}>
			<Box className={styles.top}></Box>
			{value && <Canvas
				text={value}
				options={{
					level: 'M',
					margin: 3,
					scale: 4,
					width: 200,
					color: {
						dark: '#010599FF',
						light: '#FFBF60FF',
					},
				}}
			/>}
			<Box className={styles.bottom}></Box>
		</Box>
	)
}

export default Phone
