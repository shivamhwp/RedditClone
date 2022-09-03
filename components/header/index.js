import Image from 'next/image'
import { useEffect, useState } from 'react'
import Icons from './Icons'
import Logo from './Logo'
import SearchBar from './SearchBar'

const style = {
  header: 'fixed inset-0 z-50 flex h-14 bg-[#1a1a1b]',
  wrapper: 'flex flex-1 items-center space-x-4 border-b border-[#343536] px-5',
  leftHeader: 'flex flex-1 items-center space-x-4',
  rightHeader: 'flex items-center space-x-4',
  profileImageContainer:
    'flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full relative',
  profileImage: 'object-contain',
}

const Header = () => {
  return (
        <header className={style.header}>
          <div className={style.wrapper}>
            <div className={style.leftHeader}>
              <Logo />
              <SearchBar />
            </div>
            <div className={style.rightHeader}>
              <Icons />

              <button>
                <div className={style.profileImageContainer}>
                    <Image
                      className={style.profileImage}
                      src='https://res.cloudinary.com/detk4gyj1/image/upload/v1661187462/RedditClone/DALL_E_2022-08-03_17.00.43_-_Thor_lightening_the_sky_with_his_hammer_in_dark_y2uycq.png'
                      layout='fill'
                      alt='Profile Image'
                    />
                </div>
              </button>
            </div>
          </div>
        </header>
  )
}

export default Header
