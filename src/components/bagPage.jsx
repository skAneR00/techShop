import { useSelector, useDispatch } from 'react-redux';
import { setBagProducts, removeBagProduct } from '../store/bagProductsSlice/bagProductsSlice';
import CheckoutList from './checkoutList';



export default function BagPage() {

    const items = useSelector((state) => state.bagProducts.bagProducts);



    const dispatch = useDispatch();

    return (
        <div className='flex w-full md:flex-row flex-col'>
            <div className="flex flex-col flex-2 gap-4 sm:ml-5 sm:px-12 px-4 sm:pt-12 md:w-3/4 w-full">
                <div className="m-2">
                    <h2 className="text-ui-dark sm:text-5xl text-2xl font-normal">Check Your Bag Items</h2>
                </div>
                <div className="flex flex-col gap-4 overflow-y-hidden md:overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-ui-placeholder scrollbar-track-ui-placeholder min-h-[70%]">
                    { 
                        items.length > 0 ?
                            items.map((item) => (
                                <div className='sm:w-4/5 w-full bg-white lg:h-1/2 h-auto flex sm:flex-row flex-col gap-4 py-4 px-6 rounded-3xl' key={item.id}>
                                    <div className='lg:w-1/3 sm:w-1/2  w-full'>
                                        <img src={item.productImages[0]} alt="product img" className='w-full h-full' />
                                    </div>
                                    <div className='lg:w-2/3 sm:w-1/2 w-full flex flex-col p-2 gap-2 items-start justify-between'>
                                        <div>
                                            <h4 className='font-normal lg:text-3xl sm:text-2xl text-xl text-ui-dark'>{item.productName}</h4>
                                            <span className='sm:text-xl text-base text-ui-tertiary'>{item.productColor}</span>
                                        </div>

                                        <div className='flex w-full flex-wrap justify-between sm:p-2 p-0 content-end'>
                                            <p className='text-ui-dark lg:text-xl sm:text-lg text-base'>{item.productPrice} ₸ x {item.productCount}</p>
                                            <div className='flex gap-4 items-center'>
                                                <button className='text-ui-danger lg:text-2xl sm:text-xl text-lg'
                                                    onClick={() => {
                                                        dispatch(removeBagProduct(item.id));
                                                    }}
                                                >-</button>
                                                <span className='text-ui-dark lg:text-xl sm:text-lg text-base'>{item.productCount}</span>
                                                <button className='text-ui-success lg:text-2xl sm:text-xl text-lg'
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