import { setAddress } from "../store/setactiveUserSlice/setActiveUserSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


export default function AddressPopup({ showPopup }) {

    const user = useSelector((state) => state.activeUser.activeUser);

    const [shippingName, setShippingName] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const addAddress = () => {
        dispatch(setAddress({
            "name": shippingName,
            "country": country,
            "city": city,
            "state": state,
            "street": streetName
        }));
        showPopup();
    }

    const dispatch = useDispatch();

    return (
        <form className="flex flex-col absolute top-[10%] left-[25%] w-1/2">
            <div className="bg-white p-8 rounded-2xl flex flex-col gap-4">
                <h4 className="text-xl font-semibold mb-4">Add Address</h4>
                <div className="flex flex-col ">
                    <label htmlFor="shippingName" className="text-ui-placeholder">Shipping Name: </label>
                    <input type="text" name="shippingName" id="shippingName" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="Sherlock Holmes" onChange={e => setShippingName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="streetName" className="text-ui-placeholder">Street Name: </label>
                    <input type="text" name="streetName" id="streetName" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="Baker Street 221B" onChange={e => setStreetName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="shippingCity" className="text-ui-placeholder">City: </label>
                    <input type="text" name="shippingCity" id="shippingCity" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="London" onChange={e => setCity(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="shippingState" className="text-ui-placeholder">State / Province: </label>
                    <input type="text" name="shippingState" id="shippingState" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="Westminster" onChange={e => setState(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="shippingCountry" className="text-ui-placeholder">Country: </label>
                    <input type="text" name="shippingCountry" id="shippingCountry" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" placeholder="England" onChange={e => setCountry(e.target.value)} />
                </div>
                <button type="button" className={`text-white rounded-lg py-2 bg-ui-dark`} onClick={addAddress}> Add Address </button>
            </div>
        </form>
    )
}