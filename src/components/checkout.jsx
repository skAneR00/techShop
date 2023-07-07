import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setBagProducts, removeBagProduct, deleteAllBagProducts } from '../store/bagProductsSlice/bagProductsSlice';
import { Link } from "react-router-dom";
import ChangeAddressPopup from './popups/changeAddressPopup';
import Back from '../assets/Back.svg';
import ChangeCardPopup from './popups/changeCardPopup';


export default function Checkout() {

    const items = useSelector((state) => state.bagProducts.bagProducts);
    const user = useSelector((state) => state.activeUser.activeUser);

    const [showCardPopup, setShowCardPopup] = useState(false);
    const [showAddressPopup, setShowAddressPopup] = useState(false);

    const isShowAddressPopup = () => {
        setShowAddressPopup(!showAddressPopup);
    }
    const isShowCardPopup = () => {
        setShowCardPopup(!showCardPopup);
    }

    //#region calculate
    const calculateTotalPrice = () => {
        const totalPrice = items.reduce((total, item) => total + Number(item.productPrice.split(' ').join('')) * item.productCount, 0);
        return totalPrice;
    };

    const calculateShipping = () => {
        return (items.length * 3000);
    }

    const calculateVat = () => {
        const totalPrice = items.reduce((total, item) => total + Number(item.productPrice.split(' ').join('')) * item.productCount, 0);
        return Math.round((totalPrice * 10) / (10 + 100));
    }

    const calculateSumm = () => {
        return Number(calculateTotalPrice()) + Number(calculateShipping()) + Number(calculateVat());
    }
    //#endregion

    const dispatch = useDispatch();

    return (
        <div className={`flex lg:flex-row flex-col gap-5 w-screen min-h-screen ${showAddressPopup || showCardPopup ? "md:-ml-5 overflow-hidden" : "md:pt-14 md:px-28 px-5"} justify-between`}>
            {
                showAddressPopup ? <ChangeAddressPopup showPopup={isShowAddressPopup} /> : null
            }
            {

                showCardPopup ? <ChangeCardPopup showPopup={isShowCardPopup} /> : null
            }
            <div className="flex flex-col gap-6 lg:w-3/4 w-full lg:pr-5 ">
                <div className="flex flex-col p-4 gap-2 bg-white rounded-xl">
                    <h4 className="sm:text-3xl text-xl font-normal text-ui-dark uppercase tracking-widest">Shipping address</h4>
                    <div className="flex justify-between">
                        {
                            user.addresses.length > 0 ?
                                user.addresses.map((item) => (
                                    item.active == true ? (
                                        <div className="flex flex-col px-2 gap-1" key={user.addresses.indexOf(item)}>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.name}</span>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.street}</span>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.city + " , " + item.state}</span>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.country}</span>
                                        </div>
                                    )
                                        :
                                        null
                                ))
                                :
                                <p>No Saved Addresses</p>
                        }
                        <button className="sm:px-6 px-4 py-2 rounded-xl border border-ui-dark flex items-center justify-center h-min" onClick={isShowAddressPopup}>
                            Change
                        </button>
                    </div>
                </div>

                <div className="flex flex-col p-4 gap-2 bg-white rounded-xl">
                    <h4 className="sm:text-3xl text-xl font-normal text-ui-dark uppercase tracking-widest">Payment Method</h4>
                    <div className="flex justify-between">
                        {
                            user.paymentMethods.length > 0 ?
                                user.paymentMethods.map((item) => (
                                    item.active ? (
                                        <div className="flex flex-col px-2 gap-1" key={user.paymentMethods.indexOf(item)}>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.cardName}</span>
                                            <span className="text-ui-dark sm:text-xl text-base font-normal">{item.cardNum}</span>
                                        </div>
                                    )
                                        :
                                        null
                                ))
                                :
                                <p>No Saved Payment Methods</p>
                        }
                        <button className="sm:px-6 px-4 py-2 rounded-xl border border-ui-dark flex items-center justify-center h-min" onClick={isShowCardPopup}>
                            Change
                        </button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col p-4 gap-2 bg-white rounded-xl ">
                        <h4 className="text-3xl font-normal text-ui-dark uppercase tracking-widest">Review Your Bag</h4>
                        <div className="flex flex-col gap-4">
                            {
                                items.length > 0 ?
                                    items.map((item) => (
                                        <div className='sm:w-4/5 w-full bg-white h-1/2 flex sm:flex-row flex-col gap-4 py-4 px-6 rounded-3xl' key={item.id}>
                                            <div className='sm:w-1/4 w-full h-max'>
                                                <img src={item.productImages[0]} alt="product img" className='w-full h-full' />
                                            </div>
                                            <div className='sm:w-3/4 w-full flex flex-col p-2 gap-2 items-start justify-between'>
                                                <div>
                                                    <h4 className='font-normal sm:text-3xl text-xl text-ui-dark'>{item.productName}</h4>
                                                    <span className='sm:text-xl text-lg text-ui-tertiary'>{item.productColor}</span>
                                                </div>

                                                <div className='flex w-full justify-between sm:p-2 p-0 content-end'>
                                                    <p className='text-ui-dark text-xl'>{item.productPrice} ₸ x {item.productCount}</p>
                                                    <div className='flex gap-4 items-center'>
                                                        <button className='text-ui-danger text-2xl'
                                                            onClick={() => {
                                                                dispatch(removeBagProduct(item.id));
                                                            }}
                                                        >-</button>
                                                        <span className='text-ui-dark text-xl'>{item.productCount}</span>
                                                        <button className='text-ui-success text-2xl'
                                                            onClick={() => {
                                                                dispatch(setBagProducts(item));
                                                                console.log(items);
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                    : <h2 className='text-center text-lg'>Bag Empty... <br />Add Something In The Store</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex flex-col bg-white rounded-xl p-4'>
                    <h4 className='text-black text-xl'>Order Summary</h4>
                    <div className='flex flex-col gap-4 py-4 border-b-2 border-ui-light'>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>Items: </span>
                            <span>{calculateTotalPrice().toLocaleString()} ₸</span>
                        </div>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>Shipping: </span>
                            <span>{calculateShipping().toLocaleString()} ₸</span>
                        </div>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>VAT Payment: </span>
                            <span>{calculateVat().toLocaleString()} ₸</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-ui-danger font-medium text-xl border-b-2 border-ui-light py-4 mb-2'>
                        <span>Order Total: </span>
                        <pre><span> {calculateSumm().toLocaleString()} ₸</span></pre>
                    </div>
                    <Link to="../main/store" className='text-white bg-ui-dark rounded-xl px-6 py-2 flex justify-center items-center' onClick={() => dispatch(deleteAllBagProducts())}>
                        Place your order
                    </Link>
                </div>
                <Link to="../main/bag" className='flex px-6 py-2 rounded-xl border border-ui-dark gap-2 self-end'>
                    <img src={Back} alt="Back" className="w-6 h-6" />
                    Back
                </Link>
            </div>
        </div>
    )

}