import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePaymentMethod, removeAddress } from "../store/setactiveUserSlice/setActiveUserSlice";
import AddressPopup from "./popups/addressPopup";
import CardPopup from "./popups/cardPopup";
import ShowPass from '../assets/ShowPass.svg';
import HidePass from '../assets/HidePass.svg';
import Remove from '../assets/Remove.svg';
import { Link } from "react-router-dom";


export default function ProfilePage() {

    const user = useSelector((state) => state.activeUser.activeUser);
    const activeAddress = useSelector((state) => state.activeUser.activeAddress);
    const activeCard = useSelector((state) => state.activeUser.activeCard);

    const [showPass, setShowPass] = useState(false);

    const [showCardPopup, setShowCardPopup] = useState(false);
    const [showAddressPopup, setShowAddressPopup] = useState(false);

    const isShowAddressPopup = () => {
        setShowAddressPopup(!showAddressPopup);
    }
    const isShowCardPopup = () => {
        setShowCardPopup(!showCardPopup);
    }

    const dispatch = useDispatch();


    return (
        JSON.stringify(user) != '{}' ?
            <>
                <div className="flex md:flex-row flex-col w-full px-5">
                    <div className="flex flex-col bg-white md:w-1/2 w-full rounded-xl h-min py-5">
                        <h4 className="text-ui-dark text-xl font-bold text-center">
                            Your Profile
                        </h4>
                        <div className="flex flex-col px-5">
                            <p className="text-ui-dark text-lg font-semibold">Email: </p>
                            <p className="text-ui-dark font-light">{user.email}</p>
                        </div>
                        <div className="flex flex-col px-5">
                            <label htmlFor="password" className="text-ui-dark text-lg font-semibold">Password: </label>
                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} value={user.password} id="password" className="w-full p-2 pr-10 outline-none bg-transparent" disabled />
                                <button type='button' className="absolute right-3 top-3" onClick={() => { setShowPass(!showPass) }}>
                                    <img src={showPass ? HidePass : ShowPass} alt="show" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <h4 className="text-ui-dark text-xl font-bold text-center">Your Addresses: </h4>
                            {
                                user.addresses.map((item) => (
                                    <div className="flex border rounded-xl mx-5 p-5 border-ui-dark items-center justify-between" key={user.addresses.indexOf(item)}>
                                        <div className="flex flex-col">
                                            <p>{item.name}</p>
                                            <p>{item.country}, {item.city}</p>
                                            <p>{item.street}</p>
                                        </div>
                                        <button className="flex items-center justify-center bg-ui-danger rounded-full p-3" onClick={() => dispatch(removeAddress(user.addresses.indexOf(item)))}><img src={Remove} alt="Remove" className="w-6 h-6"></img></button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <h4 className="text-ui-dark text-xl font-bold text-center">Your Cards: </h4>
                            {
                                user.paymentMethods.map((item) => (
                                    <div className="flex border rounded-xl mx-5 p-5 border-ui-dark items-center justify-between" key={user.paymentMethods.indexOf(item)}>
                                        <div className="flex flex-col">
                                            <p>{item.cardName}</p>
                                            <p>{item.cardNum}</p>
                                        </div>
                                        <button className="flex items-center justify-center bg-ui-danger rounded-full p-3" onClick={() => dispatch(removePaymentMethod(item.cardNum))}><img src={Remove} alt="Remove" className="w-6 h-6"></img></button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-5 gap-5 items-start mt-5 md:mt-0">
                        {
                            showCardPopup ? null : <button className="flex px-6 py-2 rounded-xl border border-ui-dark gap-2" onClick={isShowAddressPopup}> Add Address </button>
                        }
                        {
                            showAddressPopup ?
                                <div className="flex justify-center items-center relative w-full">
                                    <AddressPopup showPopup={isShowAddressPopup} />
                                </div>
                                : null
                        }

                        {
                            showAddressPopup ? null : <button className="flex px-6 py-2 rounded-xl border border-ui-dark gap-2" onClick={isShowCardPopup}> Add Card </button>
                        }
                        {
                            showCardPopup ?
                                <CardPopup showPopup={isShowCardPopup} />
                                : null
                        }
                    </div>
                </div>
            </>
            :
            <div className="flex flex-col items-center justify-center w-full gap-5">
                <h2 className="text-3xl font-bold">You are not authorized</h2>
                <Link to='/' className="flex px-6 py-2 rounded-xl border border-ui-dark gap-2">
                    Back To Login Page
                </Link>
            </div>
    )
}