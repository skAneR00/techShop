import { useSelector } from 'react-redux';
import WhiteBagIcon from '../assets/White-Bag-Icon.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function CheckoutList() {

    const items = useSelector((state) => state.bagProducts.bagProducts);

    const calculateTotalPrice = () => {
        const totalPrice = items.reduce((total, item) => total + Number(item.productPrice.split(' ').join('')) * item.productCount , 0);
        return totalPrice.toLocaleString();
    };

    return (
        <div className="mt-[72px] flex flex-grow-0 flex-col items-center md:w-1/5 w-full">
            <h4 className="text-ui-dark font-medium text-4xl self-center">Bag</h4>
            <div className="flex flex-wrap mt-2 gap-3 justify-center">
                {
                    items.length > 0 ?
                        items.map((item) => (
                            <div className="w-20 h-20 bg-white rounded-xl p-2 relative" key={item.id}>
                                <img src={item.productImages[0]} className="w-full h-full" />
                            </div>
                        ))
                        :
                        null
                }
            </div>
            <div className="flex flex-col items-center mt-2">
                {
                    items.length > 0 ?
                        <p>Bag Total: <b>{calculateTotalPrice()} ₸</b></p>
                    :
                    null
                }
                <Link to="../../checkout" className="flex items-center justify-center w-40 h-10 rounded-xl text-white bg-ui-dark my-4">
                    <img src={WhiteBagIcon} className="w-5 h-5 mr-2" />
                    Checkout
                </Link>
            </div>
        </div>
    )
}





