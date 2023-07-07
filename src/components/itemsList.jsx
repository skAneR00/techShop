import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import BagList from './BagList';

const ItemsList = () => {
    const products = useSelector((state) => state.allProducts.allProducts);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex md:flex-row flex-col w-full">
            <div className="flex flex-col gap-4 md:ml-5 md:w-3/4 w-full">
                <div className="flex flex-col justify-center self-center">
                    <label htmlFor="searchItem" className="text-ui-tertiary px-2 my-2 text-base">
                        Search Item
                    </label>
                    <input
                        type="text"
                        id="searchItem"
                        className="h-14 lg:w-[570px] sm:w-[450px] text-xl py-4 px-6 rounded-[13px] shadow-lg"
                        placeholder="Apple Watch, MacBook Pro, ..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="flex md:flex-wrap md:flex-row flex-col justify-center md:justify-normal items-center gap-4 mt-4 overflow-y-hidden md:overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-ui-placeholder scrollbar-track-ui-placeholder">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => <ItemCard props={item} key={item.id} />)
                    ) : (
                        <p>No matching products found.</p>
                    )}
                </div>
            </div>

            <BagList />
        </div>
    );
};

export default ItemsList;
