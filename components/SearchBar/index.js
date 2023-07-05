import React from 'react'
import styles from './styles.module.css'
function SearchBar () {
  const countries = [
    { name: 'Afghanistan' },
    { name: 'Albania' },
    { name: 'Algeria' },
    { name: 'Andorra' },
    { name: 'Angola' },
    { name: 'Antigua and Barbuda' },
    { name: 'Argentina' },
    { name: 'Armenia' },
    { name: 'Australia' },
    { name: 'Austria' },
    { name: 'Azerbaijan' },
    { name: 'Bahamas' },
    { name: 'Bahrain' },
    { name: 'Bangladesh' },
    { name: 'Barbados' },
    { name: 'Belarus' },
    { name: 'Belgium' },
    { name: 'Belize' },
    { name: 'Benin' },
    { name: 'Bhutan' }
  ]
  return (
    <div className={styles.banner}>
      <select className={styles.countryList} placeholder='Search a location'>
        {countries?.map(item => {
          return (
            <option key={item?.name} value={item?.name}>
              {item?.name}
            </option>
          )
        })}
      </select>
      <input
        placeholder='Search doctors, clinics, hospitals, etc.'
        className={styles.searcField}
      ></input>
      <button className={styles.searchbtn}> SEARCH</button>
    </div>
  )
}

export default SearchBar
