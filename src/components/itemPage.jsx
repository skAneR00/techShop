import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import BagList from "./bagList"
import Back from '../assets/Back.svg'

export default function ItemPage() {

    const products = useSelector((state) => state.allProducts.allProducts);
 


    const dispatch = useDispatch();

    return (
        <div className="flex">
            <div className="flex flex-col gap-4 ml-6 mt-12 w-3/4">
                <Link to="../store" className="flex p-2 gap-1 text-xl text-ui-dark items-center justify-center">
                    <img src={Back} alt="Back" className="w-6 h-6" />
                    Back
                </Link>
                <div className="flex">
                    <div className="flex">
                        <div className="flex flex-col">

                        </div>
                    </div>
                </div>
            </div>

            <BagList />
        </div>
    )
}