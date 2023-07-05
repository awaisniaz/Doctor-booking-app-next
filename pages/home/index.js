import React from 'react'
import Loader from '../../components/loader'
import Header from '../../components/Header.js'
import Banner from '../../components/Banner'
import SearchBar from '../../components/SearchBar'
import LookFor from '../../components/WhatYou'
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SearchBar />
      <LookFor />
    </>
  )
}

export default Home
