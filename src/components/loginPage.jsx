import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from "axios";
import { setActiveUser } from "../store/setactiveUserSlice/setActiveUserSlice"
import ShowPass from '../assets/ShowPass.svg'
import HidePass from '../assets/HidePass.svg'
import { Navigate } from "react-router-dom";

export default function LoginPage() {

    const user = useSelector((state) => state.activeUser.activeUser);
    const [showPass, setShowPass] = useState(false);
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redir, setRedir] = useState(false);
    const [admin, setAdmin] = useState(false);

    function checker() {
        users.map((item) => {
            if (item.email == email && item.password == password) {
                dispatch(setActiveUser(item));
                item.role == "user" ? setRedir(true) : setAdmin(true)
            }
        })
    }

    async function getUsers() {
        await axios.get('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
    }

    useEffect(() => {
        getUsers();
    }, [])



    const dispatch = useDispatch();

    return (
        <div className="flex h-screen justify-center items-center">
            <form className="flex flex-col items-center justify-between gap-5 py-5 bg-white w-4/5 h-3/5 rounded-lg shadow-xl md:w-3/5 sm:w-3/5 lg:w-1/5">
                <h4 className="text-3xl font-semibold">Hello!</h4>

                <div className="gap-5 flex w-full flex-col items-center">
                    <div className="flex flex-col w-full px-5">
                        <label htmlFor="email" className="ml-2">Enter your email</label>
                        <input type="text" placeholder="Email..." id="email" onChange={e => setEmail(e.target.value)} className="w-full shadow-lg p-2 rounded-xl outline-none" />
                    </div>
                    <div className="flex flex-col w-full px-5">
                        <label htmlFor="password" className="ml-2">Enter your password</label>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} placeholder="Password..." id="password" onChange={e => setPassword(e.target.value)} className="w-full shadow-lg p-2 pr-10 rounded-xl outline-none" />
                            <button type='button' className="absolute right-3 top-3" onClick={() => { setShowPass(!showPass) }}>
                                <img src={showPass ? HidePass : ShowPass} alt="show" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {
                    redir ? 
                    <Navigate to="main/store" />
                    : 
                    admin ? 
                        <Navigate to="admin"/> 
                        : 
                        <button type="button" className="shadow-xl border px-5 py-1 rounded-lg" onClick={() => { checker() }}>LOG IN</button>
                }
            </form>
        </div>
    )
}