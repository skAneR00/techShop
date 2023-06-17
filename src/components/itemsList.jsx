import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ItemCard from './itemCard';
import BagList from './bagList';
import axios from 'axios';



export default function ItemsList() {
    // const dispatch = useDispatch();

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     loadProducts();
    // }, [])

    // function loadProducts() {
    //     axios.get('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products')
    //         .then((res) => {
    //             // dispatch(setProducts(res.data));
    //             setProducts(res.data);
    //             console.log(products);
    //             console.log(res.data);
    //             // return res.json();
    //         })
    //     // .then((data) =>{
    //     //   console.log(data);
    //     //   dispatch(setAllProducts(data.data));
    //     // })
    // }


    // console.log('rendering!');

    const products = useSelector((state) => state.allProducts.allProducts);

    return (
        <div className="flex flex-col gap-4 ml-5 w-3/4">
            <div className="flex flex-col justify-center self-center">
                <label htmlFor="searchItem" className="text-ui-tertiary px-2 my-2 text-base">Search Item</label>
                <input type="text" id="searchItem" className="h-14 w-[570px] text-xl py-4 px-6 rounded-[13px] shadow-lg" placeholder="Apple Watch, MacBook Pro, ..."/>
            </div>
            
            <div  className="flex flex-wrap gap-4 mt-4 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-ui-placeholder scrollbar-track-ui-placeholder ">
                {/* <ItemCard props={{ productName: 'Example', productDescription: 'Example', productPrice: '1000', productImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1' }} />
                <ItemCard props={{ productName: 'Example', productDescription: 'Example', productPrice: '1000', productImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1' }} />
                <ItemCard props={{ productName: 'Example', productDescription: 'Example', productPrice: '1000', productImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1' }} /> */}
                {
                    products.length > 0 ? (
                        products.map((item) => (
                            <ItemCard props={item} />
                        ))
                    )
                        :
                        null
                }
            </div>
        </div>
    )
}
