import { useSelector, useDispatch } from 'react-redux';
import { setBagProducts, removeBagProduct } from '../store/bagProductsSlice/bagProductsSlice';
import CheckoutList from './checkoutList';



export default function BagPage() {

    const items = useSelector((state) => state.bagProducts.bagProducts);



    const dispatch = useDispatch();

    return (
        <div className='flex flex-1 flex-grow'>
            <div className="flex flex-col flex-2 gap-4 ml-5 px-12 pt-12 w-3/4">
                <div className="m-2">
                    <h2 className="text-ui-dark text-5xl font-normal">Check Your Bag Items</h2>
                </div>
                <div className="flex flex-col gap-4 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-ui-placeholder scrollbar-track-ui-placeholder min-h-[70%]">
                    {
                        items.length > 0 ?
                            items.map((item) => (
                                <div className='w-4/5 bg-white h-1/2 flex gap-4 py-4 px-6 rounded-3xl' key={item.id}>
                                    <div className='w-1/4'>
                                        <img src={item.productImages[0]} alt="product img" className='w-full h-full' />
                                    </div>
                                    <div className='w-3/4 flex flex-col p-2 gap-2 items-start justify-between'>
                                        <div>
                                            <h4 className='font-normal text-3xl text-ui-dark'>{item.productName}</h4>
                                            <span className='text-xl text-ui-tertiary'>{item.productColor}</span>
                                        </div>

                                        <div className='flex w-full justify-between p-2 content-end'>
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

            <CheckoutList />
        </div>
    )
}