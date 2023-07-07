import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setBagProducts } from "../store/bagProductsSlice/bagProductsSlice";
import addToBag from '../assets/Add-To-Bag.svg'
import BagList from "./bagList"
import Back from '../assets/Back.svg'
import { useState } from "react";

export default function ItemPage() {

    const location = useLocation();
    const data = location.state;

    const [activeImg, setActiveImg] = useState(data.productImages[0]);

    console.log(data);

    const dispatch = useDispatch();

    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-4 ml-6 mt-12 w-3/4">
                <Link to="../store" className="flex p-2 gap-1 text-xl text-ui-dark items-center justify-center self-start">
                    <img src={Back} alt="Back" className="w-6 h-6" />
                    Back
                </Link>
                <div className="flex gap-6">
                    <div className="flex gap-4 w-2/5">
                        <div className="flex flex-col gap-4">
                            {
                                data.productImages.map((item) => (
                                    <div className="rounded-xl bg-white p-2" key={data.productImages.indexOf(item)} onClick={() => setActiveImg(item)}>
                                        <img src={item} alt="product" className="w-10 h-10" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="bg-white rounded-xl flex item-center justify-center w-[262px] h-[300px] p-2">
                            <img src={activeImg} alt="product" />
                        </div>
                    </div>
                    <div className="flex flex-col w-3/5">
                        <div className="flex flex-col p-2 gap-2 items-start">
                            <h4 className="font-bold text-ui-dark text-6xl">{data.productName}</h4>
                            <span className="text-ui-placeholder text-3xl">{data.productColor}</span>
                            <button className="border border-ui-placeholder p-2 rounded-xl text-lg font-medium">{data.productDescription}</button>
                        </div>
                        <div className="flex">
                            <p className="text-3xl font-medium">{data.productPrice} ₸</p>
                        </div>
                        <div className="p-2 flex">
                            <p>{data.productFullDescription}</p>
                        </div>
                        <div className="flex justify-end p-2">
                            <button className='bg-ui-dark rounded-[9px] flex justify-center items-center px-6 py-2 text-white text-xl'
                                onClick={
                                    () => { dispatch(setBagProducts(data)) }
                                }
                            >
                                <img src={addToBag} alt="add icon" className='w-6 h-6 mr-2' />
                                Add To Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <BagList />
        </div>
    )
}