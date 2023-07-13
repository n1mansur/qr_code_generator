import React from 'react'
import styles from './styles.module.scss'
import { Box } from '@chakra-ui/react'
import Container from '@/components/UI/Container'

export default function CategoryList({ data = [] ,setCategory}) {
  return (
    <div className={styles.category}>
     <Container>
       <Box className={styles.cardsList}>
         {data.map(el => <Box className={styles.card} onClick={()=>setCategory(el.name)} key={el.id}>{el.name}</Box>)}
       </Box>
     </Container>
    </div>
  )
}
