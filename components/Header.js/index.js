import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  const menuList = [
    {
      name: 'Specialities',
      link: '/specialities'
    },
    {
      name: 'Doctors',
      link: '/doctors'
    },
    {
      name: 'Blogs',
      link: '/blogs'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    }
  ]
  return (
    <div className={styles.containerfluid}>
      <div className={styles.logo}>
        <Image
          src='https://doccure-wp.dreamguystech.com/wp-content/uploads/2021/10/logo.png'
          alt='logo-icon'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '80%', height: 'auto' }}
        ></Image>
      </div>
      <div className={styles.menucontainer}>
        <ul className={styles?.list}>
          {menuList?.map(item => {
            return (
              <li key={item?.name} className={styles?.element}>
                <Link className={styles.url} href={item?.link}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='loginsection'>
        <div className='selectLanguage'></div>
        <div className={styles.loginbtn}>
          <button className={styles.login}>Login / Sign-Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
