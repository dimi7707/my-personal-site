import React from 'react'
import { TopNavBar } from './TopNavBar'

import '../../styles/global.scss';

export const MainApp = () => {

  const navigation = [
    { name: 'Personal info', href: '#', current: true },
    { name: 'Skills', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact me', href: '#', current: false },
  ];

  return (
    <>
      <TopNavBar navigationLinks={ navigation }  />
    </>
  )
}
