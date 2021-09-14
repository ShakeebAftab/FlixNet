import { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../Static/logo.png'
import profile from '../../Static/profile.png'


export const NavBar = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => setShow(window.scrollY > 170 ? true : false))
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  return (
    <div className={`nav ${show && `navBlack`}`}>
      <img src={logo} alt='logo' className='logo' />
      <img src={profile} alt='profile' className='profile' />
    </div>
  )
}
