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
        <div className='flex h-screen lg:py-5 flex-col lg:flex-row'>
            <div className='flex items-center justify-between lg:flex-col flex-row bg-white min-w-[72px] lg:h-full h-20 rounded-xl text-slate-700 p-3 m-3 lg:m-0 lg:p-0'>
                <div className='flex lg:flex-col flex-row gap-8 lg:mt-8 ml-2 lg:ml-0'>
                    <img src={logo} alt="logo" className='w-6 h-auto' />
                    <Link to="profile"><img src={Profile} alt="menu" className='w-6 h-auto' /></Link>
                    <Link to="store"><img src={shopIcon} alt="shop" className='w-6 h-auto' /></Link>
                    <Link to="bag"><img src={bagIcon} alt="bag" className='w-6 h-auto' /></Link>
                </div>
                <div className='flex justify-center items-center lg:mb-8 h-10 w-10 rounded-[10px] bg-ui-danger'>
                    <Link to="/"><img src={Exit} alt="exit" className='w-6 h-auto' /></Link>
                </div>
            </div>

            <Outlet />
        </div>
    )
}