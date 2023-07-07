import React, { useState } from 'react';
import { setPaymentMethod } from '../../store/setactiveUserSlice/setActiveUserSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CardPopup({ showPopup }) {

    const user = useSelector((state) => state.activeUser.activeUser);

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    //#region handles
    const handleCardNumberChange = (event) => {
        const formattedValue = formatCardNumber(event.target.value);
        setCardNumber(formattedValue);
    };

    const handleExpiryDateChange = (event) => {
        const formattedValue = formatExpiryDate(event.target.value);
        setExpiryDate(formattedValue);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleCardHolderNameChange = (event) => {
        setCardHolderName(event.target.value);
    };

    const formatCardNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');

        const formattedValue = cleanedValue.replace(/(.{4})/g, '$1 ');

        return formattedValue;
    };

    const formatExpiryDate = (value) => {
        const cleanedValue = value.replace(/\D/g, '');

        const formattedValue = cleanedValue.replace(/^(\d{2})/, '$1/');

        return formattedValue;
    };
    //#endregion

    const addCard = () => {
        dispatch(setPaymentMethod({
            "cardName": cardHolderName,
            "cardNum": cardNumber,
            "cardDate": expiryDate,
            "cardCVC": cvv,
            "active": false
        }))
        showPopup();
    }

    const dispatch = useDispatch();

    return (
        <form className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6 h-min">
            <h2 className="text-xl font-semibold mb-4">Credit Card Information</h2>

            <div className="mb-4 flex flex-col">
                <label htmlFor="cardHolderName" className="text-ui-placeholder">
                    Cardholder Name
                </label>
                <input type="text" id="cardHolderName" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" value={cardHolderName} onChange={handleCardHolderNameChange} placeholder="John Doe" />
            </div>

            <div className="mb-4 flex flex-col">
                <label htmlFor="cardNumber" className="text-ui-placeholder">
                    Card Number
                </label>
                <input type="text" id="cardNumber" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" value={cardNumber} onChange={handleCardNumberChange} maxLength={19} placeholder="XXXX XXXX XXXX XXXX" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className='flex flex-col'>
                    <label htmlFor="expiryDate" className="text-ui-placeholder">
                        Expiry Date
                    </label>
                    <input type="text" id="expiryDate" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" value={expiryDate} onChange={handleExpiryDateChange} maxLength={5} placeholder="MM/YY" />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="cvv" className="text-ui-placeholder">
                        CVV
                    </label>
                    <input type="text" id="cvv" className="shadow-lg rounded-xl px-4 py-2 outline-none placeholder:text-ui-placeholder" value={cvv} onChange={handleCvvChange} maxLength={3} placeholder="XXX" />
                </div>
            </div>

            <button type="button" onClick={addCard} className="w-full bg-ui-dark text-white rounded py-2 px-4">
                Add Card
            </button>
        </form>
    );
};