import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from "axios";
import { setActiveUser } from "../store/setactiveUserSlice/setActiveUserSlice"
import ShowPass from '../assets/ShowPass.svg'
import HidePass from '../assets/HidePass.svg'

export default function LoginPage(){

    const user = useSelector((state) => state.activeUser.activeUser)
    const [showPass, setShowPass] = useState(false);

    

    const dispatch = useDispatch();

    return(
        <div className="flex h-full justify-center items-center">
            <form className="flex flex-col items-center justify-between gap-5 py-5 bg-white w-1/5 h-3/5 rounded-lg shadow-xl">
                <h4 className="text-3xl font-semibold">Hello!</h4>
                
                <div className="gap-5 flex w-full flex-col items-center">
                    <div className="flex flex-col w-full px-5">
                        <label htmlFor="email" className="ml-2">Enter your email</label>
                        <input type="text" placeholder="Email..." id="email" className="w-full shadow-lg p-2 rounded-xl outline-none"/>
                    </div>
                    <div className="flex flex-col w-full px-5">
                        <label htmlFor="password" className="ml-2">Enter your password</label>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} placeholder="Password..." id="password" className="w-full shadow-lg p-2 pr-10 rounded-xl outline-none" />
                            <button type='button' className="absolute right-3 top-3" onClick={() => { console.log('clicked'); setShowPass(!showPass) }}>
                                <img src={showPass ? HidePass : ShowPass} alt="show" className="w-5 h-5"/>
                            </button>
                        </div>
                        
                    </div>
                </div>
                
                <button className="shadow-xl border px-5 py-1 rounded-lg">LOG IN</button>
            </form>
        </div>
    )
}