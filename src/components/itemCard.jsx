import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import addToBag from '../assets/Add-To-Bag.svg'
import { setBagProducts } from '../store/bagProductsSlice/bagProductsSlice';

export default function ItemCard(props) {

    const bagList = useSelector((state) => state.bagProducts.bagProducts);

    const data = props.props;
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`../item/${props.props.id}`, { state: data });
    };

    const dispatch = useDispatch();
    
    return (
        <div className="flex flex-col mx-5 max-w-[204px] border-b-2 border-ui-placeholder md:border-none">
            <button
                className="bg-white rounded-[22px] w-[196px] h-[232px] flex items-center justify-center self-center"
                onClick={handleItemClick}
            >
                <img src={props.props.productImages[0]} alt="item image" className="w-[160px] h-[200px]" />
            </button>
            <div className="flex flex-1 flex-col mt-2 font-ubuntu p-2 gap-2 justify-between ">
                <div>
                    <h4 className='font-ubuntu font-medium text-[20px] text-ui-dark max-w-20'>{props.props.productName}</h4>
                    <span className='text-ui-tertiary font-ubuntu text-[16px] font-normal'>{props.props.productColor}</span>
                </div>
                
                <div className='flex items-center justify-between p-2'>
                    <p className='font-ubuntu font-medium text-[20px] text-ui-dark'>{props.props.productPrice} ₸</p>
                    <button className='bg-ui-dark rounded-[9px] flex justify-center items-center w-[34px] h-[34px]'
                        onClick={
                            () => {dispatch(setBagProducts(props.props))}
                        }
                    >
                        <img src={addToBag} alt="add icon" className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    )
}