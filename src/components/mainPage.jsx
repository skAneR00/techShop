import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts } from '../store/allProductsSlice/allProductsSlice'
import axios from 'axios';
import logo from '../assets/logo.svg'
import menuIcon from '../assets/Menu-Icon.svg'
import shopIcon from '../assets/Shop-Icon.svg'
import bagIcon from '../assets/Bag-Icon.svg'
import Exit from '../assets/Exit.svg'
import Profile from '../assets/Profile.svg'

export default function MainPage() {

    useEffect(() => {
        loadProducts();
    }, [])

    async function loadProducts() {
        await axios.get('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products')
            .then((res) => {
                dispatch(setAllProducts(res.data));
            })
    }

    const dispatch = useDispatch();
    
    return (
        <div className='flex h-screen py-5'>
            <div className='flex items-center justify-between flex-col bg-white min-w-[72px] h-full rounded-xl text-slate-700'>
                <div className='flex flex-col gap-8 mt-8'>
                    <img src={logo} alt="logo" className='w-6 h-auto' />
                    <Link to=""><img src={Profile} alt="menu" className='w-6 h-auto' /></Link>
                    <Link to="store"><img src={shopIcon} alt="shop" className='w-6 h-auto' /></Link>
                    <Link to="bag"><img src={bagIcon} alt="bag" className='w-6 h-auto' /></Link>
                </div>
                <div className='flex justify-center items-center mb-8 h-10 w-10 rounded-[10px] bg-ui-danger'>
                    <Link to="/"><img src={Exit} alt="exit" className='w-6 h-auto' /></Link>
                </div>
            </div>

            <Outlet />
        </div>
    )
}