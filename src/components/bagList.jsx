import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import WhiteBagIcon from '../assets/White-Bag-Icon.svg';


export default function BagList() {

    const items = useSelector((state) => state.bagProducts.bagProducts);

    console.log(items);

    const dispatch = useDispatch();

    return (
        <div className="mt-[72px] flex flex-col flex-1 items-center">
            <h4 className="text-ui-dark font-medium text-4xl self-center">Bag</h4>
            <div className="flex flex-wrap mt-2 gap-3 justify-center">
                {
                    items.length > 0 ?
                        items.map((item) => (
                            <div className="w-20 h-20 bg-white rounded-xl p-2">
                                <img src={item.productImage} className="w-full h-full" />
                            </div>
                        ))
                        :
                        null
                }
            </div>
            <div className="flex justify-center">
                <button className="flex items-center justify-center w-40 h-10 rounded-xl text-white bg-ui-dark my-4">
                    <img src={WhiteBagIcon} className="w-5 h-5 mr-2" />
                    View Bag
                </button>
            </div>
        </div>
    )
}





