import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../loader/index'
import styles from './home.module.css'
const HomePage = () => {
  const [loading, setLoding] = useState(true)
  return (
    <>
      {loading == true ? (
        <Loader></Loader>
      ) : (
        <p className={styles.name}>Awaisniaz</p>
      )}
    </>
  )
}

export default HomePage
