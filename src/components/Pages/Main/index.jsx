import { Box, Input } from '@chakra-ui/react'
import styles from './styles.module.scss'
import Phone from './components/Phone'
import CategoryList from '@/components/Pages/Main/components/CategoryList'
import Container from '@/components/UI/Container'
import Card from './components/Card'
import Website from './components/Website'
import Wifi from './components/Wifi'
import { useState } from "react";

const data = [{ name: 'Card', id: 1 }, { name: 'Wifi', id: 2 }, { name: 'Website', id: 3 }]
const MainPage = () => {
	const [category, setCategory] = useState(data[0].name);
	const [value, setValue] = useState('QR_code');

	return (
		<Box className={styles.mainPage}>
			<Container className={styles.container}>
				<Box className={styles.mainPageSection}>
					<CategoryList setCategory={setCategory} data={data} />
					<Input placeholder={'name'} onChange={(e) => setValue(e.target.value)} />
					{category == 'Card' ? <Card /> : <></>}
					{category == 'Website' ? <Website /> : <></>}
					{category == 'Wifi' ? <Wifi /> : <></>}
				</Box>
				<Phone value={value} />
			</Container>
		</Box>
	)
}

export default MainPage
