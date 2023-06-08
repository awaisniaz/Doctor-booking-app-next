import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../loader/index'
import styles from './home.module.css'
const HomePage = () => {
  const [loading, setLoding] = useState(true)
  // Use Effect
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoding(false)
  //   }, 4000)
  // }, [])
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
