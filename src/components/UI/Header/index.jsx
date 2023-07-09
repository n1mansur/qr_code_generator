import { Box, Button } from '@chakra-ui/react'
import Container from '@/components/UI/Container'
import Logo from '@/components/UI/Logo'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useResponsive } from '@/hooks/useResponsive'
import styles from './styles.module.scss'


const Header = () => {
	const md = useResponsive('md')

	return (
		<Box className={styles.header}>
			<Container className={styles.container}>
				<Link className={styles.linkLogo} href='/'>
					<Logo className={styles.logo} />
				</Link>
				<Box className={styles.btns}>
				<button className={styles.login}>
					Login
				</button>
				<button  className={styles.signUp}>
					SIGN UP
				</button>
				</Box>
			</Container>
		</Box>
	)
}
export default Header
