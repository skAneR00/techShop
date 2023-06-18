import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import menuIcon from '../assets/Menu-Icon.svg'
import shopIcon from '../assets/Shop-Icon.svg'
import bagIcon from '../assets/Bag-Icon.svg'
import Exit from '../assets/Exit.svg'
import BagList from "./bagList";

export default function MainPage() {


    return (
        <div className='flex h-full'>
            <div className='flex items-center justify-between flex-col bg-white w-[72px] h-full rounded-xl text-slate-700'>
                <div className='flex flex-col gap-8 mt-8'>
                    <img src={logo} alt="logo" className='w-6 h-auto' />
                    <img src={menuIcon} alt="menu" className='w-6 h-auto' />
                    <Link to="store"><img src={shopIcon} alt="shop" className='w-6 h-auto' /></Link>
                    <Link to="bag"><img src={bagIcon} alt="bag" className='w-6 h-auto' /></Link>
                </div>
                <div className='flex justify-center items-center mb-8 h-10 w-10 rounded-[10px] bg-ui-danger'>
                    <img src={Exit} alt="exit" className='w-6 h-auto' />
                </div>
            </div>
            <Outlet />
            <BagList />
        </div>
    )
}