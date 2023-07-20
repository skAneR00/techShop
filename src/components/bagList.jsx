import { useSelector, useDispatch } from 'react-redux';
import { removeBagProduct } from "../store/bagProductsSlice/bagProductsSlice";
import WhiteBagIcon from '../assets/White-Bag-Icon.svg';
import { Link } from "react-router-dom";


export default function BagList() {

    const items = useSelector((state) => state.bagProducts.bagProducts);

    const dispatch = useDispatch();

    return (
        <div className="sm:mt-[72px] mt-8 flex flex-col flex-1 flex-shrink items-center md:w-1/5 w-full">
            <h4 className="text-ui-dark font-medium text-4xl self-center">Bag</h4>
            <div className="flex flex-wrap mt-2 gap-3 justify-center">
                {
                    items.length > 0 ?
                        items.map((item) => (
                            <div className="w-20 h-20 bg-white rounded-xl p-2 relative" key={item.id}>
                                <img src={item.productImages[0]} className="w-full h-full" />
                                <button type="button" className="w-5 h-5 absolute -right-2 -top-2 rounded-full bg-ui-danger text-sm font-black text-center text-white" 
                                    onClick={() => {
                                        dispatch(removeBagProduct(item.id))
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        ))
                        :
                        null
                }
            </div>
            <div className="flex justify-center">
                <Link to="../bag" className="flex items-center justify-center w-40 h-10 rounded-xl text-white bg-ui-dark my-4">
                    <img src={WhiteBagIcon} className="w-5 h-5 mr-2" />
                    View Bag
                </Link>
            </div>
        </div>
    )
}





