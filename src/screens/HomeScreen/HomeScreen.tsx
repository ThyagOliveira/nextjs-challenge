import React, { useState, useEffect } from 'react'
import Card from "@/src/components/Card/Card"
import api from '@/src/utils/api'
import styles from '../../styles/Home.module.css'
import Pagination from '@etchteam/next-pagination'
import '@etchteam/next-pagination/dist/index.css'
import { useRouter } from 'next/router'


export default function HomeScreen() {
  const [beers, setBeers] = useState([])
  const router = useRouter()
  

  useEffect(() => {
    loadBeersRandom()
  }, [])

  const loadBeersRandom = async () => { 
    const { page } = router.query 
    const { size } = router.query

    const response = await api.loadBeerPage(typeof page === 'undefined' ? 1 : page, typeof size === 'undefined' ? 10 : size)
    setBeers(response.data)
  }

  return (
    <>
      <div className={styles.homeContainer}>
        {
          beers.map(item => (
            <Card
              id={item.id}
              name={item.name}
              image_url={item.image_url}
              tagline={item.tagline}
              first_brewed={item.first_brewed}
              attenuation_level={item.attenuation_level}
              ibu={item.ibu == null ? 0 : item.ibu}
              abv={item.abv == null ? 0 : item.abv }
            >
            </Card>   
          ))
        }
      </div>
      <Pagination total={1000} />
    </>
  )
}
