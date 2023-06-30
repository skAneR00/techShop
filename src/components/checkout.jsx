import { useSelector, useDispatch } from 'react-redux';
import { setBagProducts, removeBagProduct } from '../store/bagProductsSlice/bagProductsSlice';
import { Link } from "react-router-dom";
import Back from '../assets/Back.svg'


export default function Checkout() {

    const items = useSelector((state) => state.bagProducts.bagProducts);
    const user = useSelector((state) => state.activeUser.activeUser);

    const dispatch = useDispatch();

    return (
        <div className="flex w-screen min-h-screen pt-14 px-28 justify-between ">
            <div className="flex flex-col gap-6 w-3/4 pr-5 ">
                <div className="flex flex-col p-4 gap-2 bg-white rounded-xl">
                    <h4 className="text-3xl font-normal text-ui-dark uppercase tracking-widest">Shipping address</h4>
                    <div className="flex justify-between">
                        {
                            user.addresses.length > 0 ?
                            user.addresses.map((item) => (
                                <div className="flex flex-col px-2 gap-1" key={user.addresses.length}>
                                    <span className="text-ui-dark text-xl font-normal">{item.name}</span>
                                    <span className="text-ui-dark text-xl font-normal">{item.street}</span>
                                    <span className="text-ui-dark text-xl font-normal">{item.city + " , " + item.state}</span>
                                    <span className="text-ui-dark text-xl font-normal">{item.country}</span>
                                </div>
                            ))
                            :
                            <p>No Saved Addresses</p>
                        }
                        <Link to="">
                            <button className="px-6 py-2 rounded-xl border border-ui-dark flex items-center justify-center">
                                Change
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col p-4 gap-2 bg-white rounded-xl">
                    <h4 className="text-3xl font-normal text-ui-dark uppercase tracking-widest">Payment Method</h4>
                    <div className="flex justify-between">
                        {
                            user.paymentMethods.length > 0 ?
                                user.paymentMethods.map((item) => (
                                    <div className="flex flex-col px-2 gap-1" key={user.paymentMethods.length}>
                                        <span className="text-ui-dark text-xl font-normal">{item.cardName}</span>
                                        <span className="text-ui-dark text-xl font-normal">{item.cardNum}</span>
                                        <span className="text-ui-dark text-xl font-normal">{item.cardDate + " - " + item.cardCVC}</span>
                                    </div>
                                ))
                                :
                                <p>No Saved Payment Methods</p>
                        }
                        <Link to="">
                            <button className="px-6 py-2 rounded-xl border border-ui-dark flex items-center justify-center">
                                Change
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col p-4 gap-2 bg-white rounded-xl ">
                        <h4 className="text-3xl font-normal text-ui-dark uppercase tracking-widest">Review Your Bag</h4>
                        <div className="flex flex-col gap-4">
                            {
                                items.length > 0 ?
                                    items.map((item) => (
                                        <div className='w-4/5 bg-white flex gap-4 py-4 px-6 border-b-2 border-ui-placeholder' key={item.id}>
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
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex flex-col bg-white rounded-xl p-4'>
                    <h4 className='text-black text-xl'>Order Summary</h4>
                    <div className='flex flex-col gap-4 py-4 border-b-2 border-ui-light'>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>Items: </span>
                            <span>...</span>
                        </div>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>Shipping: </span>
                            <span>...</span>
                        </div>
                        <div className='flex justify-between text-ui-tertiary text-base'>
                            <span>VAT Payment: </span>
                            <span>...</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-ui-danger font-medium text-xl border-b-2 border-ui-light py-4'>
                        <span>Order Total: </span>
                        <pre><span>  1 000 000</span></pre>
                    </div>
                    <Link to="" className='text-white bg-ui-dark rounded-xl px-6 py-2 flex justify-center items-center'>
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