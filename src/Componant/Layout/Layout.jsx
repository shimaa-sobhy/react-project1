import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Nav/>
    <div className=" mx-auto">
    <Outlet></Outlet>
    </div>
    <Footer/>
    </>
  )
}
