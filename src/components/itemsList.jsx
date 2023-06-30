import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from './itemCard';
import BagList from './bagList';
import axios from 'axios';

export default function ItemsList() {

    const products = useSelector((state) => state.allProducts.allProducts);

    return (
        <div className="flex">
            <div className="flex flex-col gap-4 ml-5 w-3/4">
                <div className="flex flex-col justify-center self-center">
                    <label htmlFor="searchItem" className="text-ui-tertiary px-2 my-2 text-base">Search Item</label>
                    <input type="text" id="searchItem" className="h-14 w-[570px] text-xl py-4 px-6 rounded-[13px] shadow-lg" placeholder="Apple Watch, MacBook Pro, ..."/>
                </div>
                
                <div  className="flex flex-wrap gap-4 mt-4 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-ui-placeholder scrollbar-track-ui-placeholder ">
                    {
                        products.length > 0 ? (
                            products.map((item) => (
                                <ItemCard props={item} key={item.id}/>
                            ))
                        )
                            :
                            null
                    }
                </div>
            </div>

            <BagList />
        </div>
    )
}
