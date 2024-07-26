import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/Index';

const Shop = () => {
  const ballance= useSelector(state => state.amount)
    const dispatch = useDispatch();
    const  { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <p className='text-3xl text-white'>one item </p>
        <button className='bg-blue-800 hover:bg-blue-400 text-white' onClick={()=> {depositMoney(100)}}>   +   </button>
        Update ballance ({ballance})
        <button className='bg-blue-800 hover:bg-blue-400 text-white' onClick={()=> {withDrawMoney(100)}}>  -   </button>


    </div>
  )
}

export default Shop