import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAllProducts } from '../store/allProductsSlice/allProductsSlice'
import { Link } from "react-router-dom";

export default function AdminPage() {

    //#region 
    useEffect(() => {
        loadProducts();
    }, [])

    async function loadProducts() {
        await axios.get('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products')
            .then((res) => {
                dispatch(setAllProducts(res.data));
            })
    }

    const dispatch = useDispatch();
    //#endregion

    const products = useSelector((state) => state.allProducts.allProducts);

    const [rerender, setRerender] = useState(false);

    const [removeId, setRemoveId] = useState(-1);

    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productFullDescription, setProductFullDescription] = useState("");

    const createProduct = () => {
        axios.post('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products', {
            "productName": productName,
            "productImages": [productImage],
            "productDescription": productDescription,
            "productPrice": productPrice,
            "productFullDescription": productFullDescription,
            "productColor": productColor,
            "productCount": 1
        })
            .then((res) => "Succes Post!")
            .catch((err) => "Error Post...")
        setRerender(true);
    }

    const removeProduct = () => {
        axios.delete(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products/${removeId}`)
            .then((res) => console.log("Succes!"))
            .catch((err) => console.log("Error..."))
        setRerender(true);
    }

    useEffect(() => {
        console.log('rerender');
    }, [rerender])

    return (
        <div className="flex gap-6">
            <form className="flex flex-col">
                <h4>Add Product</h4>
                <div className="bg-white p-8 rounded-2xl flex flex-col gap-4">
                    <div className="flex flex-col ">
                        <label htmlFor="productName" className="text-ui-placeholder">Product Name: </label>
                        <input type="text" name="productName" id="productName" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="iPhone 13" onChange={e => setProductName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productImage" className="text-ui-placeholder">Product Image: </label>
                        <input type="text" name="productImage" id="productImage" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="https://....." onChange={e => setProductImage(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productDescription" className="text-ui-placeholder">Product Short Description: </label>
                        <input type="text" name="productDescription" id="productDescription" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="4 / 128 Gb" onChange={e => setProductDescription(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productColor" className="text-ui-placeholder">Product Color: </label>
                        <input type="text" name="productColor" id="productColor" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="Ice Blue" onChange={e => setProductColor(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productPrice" className="text-ui-placeholder">Product Price: </label>
                        <input type="text" name="productPrice" id="productPrice" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="599 000" onChange={e => setProductPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productFullDescription" className="text-ui-placeholder">Product Full Description: </label>
                        <textarea rows="5" name="productFullDescription" id="productFullDescription" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder resize-none" placeholder="System: iOS 15, NFC ..." onChange={e => setProductFullDescription(e.target.value)} />
                    </div>
                    <button type="button" className="bg-black text-white rounded-lg py-2" onClick={createProduct}> Add Product </button>
                </div>
            </form>
            <form className="flex flex-col">
                <h4>Remove Product</h4>
                <div className="bg-white p-8 rounded-2xl flex flex-col gap-2">
                    <h4>Choose Product: </h4>
                    <select onChange={e => setRemoveId(e.target.value)} className="outline-none shadow-lg rounded-xl px-4 py-2">
                        {
                            products.length > 0 ?
                                products.map((item) => (
                                    <option value={item.id} key={item.id}>{item.productName}</option>
                                ))
                                :
                                <option>Empty...</option>
                        }
                    </select>
                    <button type="button" className="bg-black text-white rounded-lg py-2" onClick={removeProduct}> Remove </button>
                </div>
            </form>
            <Link to='/' className="mt-6 px-6 py-2 rounded-xl border border-ui-dark h-min">
                Back to Login page
            </Link>
        </div>
    )
}