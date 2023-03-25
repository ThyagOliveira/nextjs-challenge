import React from 'react'
import styles from '../../styles/Home.module.css'

interface CardProps {
  id: string
  name: string
  image_url: string
  tagline: string
  first_brewed: string
  attenuation_level: string
  ibu: string
  abv: string
  children?: React.ReactNode
}

export default function Card({ id, name, image_url, tagline, first_brewed, attenuation_level, ibu, abv, ...props }: CardProps) {
  return (
    <article className={styles.cardStyle}>
      <div className={styles.containerImg}>
        <img className={styles.image} alt="Beer" src={image_url} />
      </div>
      <div className={styles.cardContainer}>
        <h4><b>ID: {id}</b></h4>
        <p><span>Name: {name}</span></p>
        <p>Tag line: {tagline}</p>
        <p>Attenuation level: {attenuation_level}</p>
        <p>Ibu: {ibu}</p>
        <p>Abv: {abv}</p>
        <p>First brewed: {first_brewed}</p>
      </div>
    </article>
  )
}
