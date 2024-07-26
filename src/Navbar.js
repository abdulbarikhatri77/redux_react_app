import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount= useSelector(state => state.amount)
  return (
    <button className='bg-blue-900 hover:bg-blue-400 text-white flex float-end'>Your ballance: {amount}</button>
  )
}

export default Navbar