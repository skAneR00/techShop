import { useDispatch, useSelector } from 'react-redux';
import addToBag from '../assets/Add-To-Bag.svg'
import { setBagProducts } from '../store/bagProductsSlice/bagProductsSlice';

export default function ItemCard(props) {

    
    const bagList = useSelector((state) => state.bagProducts.bagProducts);
    
    // setBagProduct = (item) => {
    //     dispatch(setBagProducts(item));
    // }

    const dispatch = useDispatch();
    
    return (
        <div className="flex flex-col mx-5">
            <div className="bg-white rounded-[22px] w-[196px] h-[232px] flex items-center justify-center">
                <img src={props.props.productImage} alt="item image" className="w-[160px] h-[200px]" />
            </div>
            <div className="flex flex-col mt-2 font-ubuntu p-2 gap-2">
                <h4 className='font-ubuntu font-medium text-[20px] text-ui-dark'>{props.props.productName}</h4>
                <span className='text-ui-tertiary font-ubuntu text-[16px] font-normal'>{props.props.productDescription}</span>
                <div className='flex items-center justify-between p-2'>
                    <p className='font-ubuntu font-medium text-[20px] text-ui-dark'>{props.props.productPrice}</p>
                    <button className='bg-ui-dark rounded-[9px] flex justify-center items-center w-[34px] h-[34px]'
                        onClick={
                            // setBagProduct(props.props)  
                            () => {dispatch(setBagProducts(props.props))}
                            // setBagProduct(props.props)
                        }
                    >
                        <img src={addToBag} alt="add icon" className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    )
}