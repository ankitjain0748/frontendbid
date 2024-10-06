import React from 'react'
import SideBar from './SideBar'

export default function AuthLayout({children}) {
  return <>
    <SideBar></SideBar>
    {children}
     </>
}