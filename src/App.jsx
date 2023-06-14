import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts } from './store/allProductsSlice/allProductsSlice'
import axios from 'axios';
import logo from './assets/logo.svg'
import menuIcon from './assets/Menu-Icon.svg'
import shopIcon from './assets/Shop-Icon.svg'
import bagIcon from './assets/Bag-Icon.svg'
import './App.css'
import ItemsList from './components/itemsList';
import BagList from './components/bagList';
import Exit from './assets/Exit.svg'
import LoginPage from './components/loginPage';



function App() {
  
  const products = useSelector((state) => state.allProducts.allProducts);
  
  // useEffect(() => {
  //   loadDataOnlyOnce();

  // }, [])

  // const loadDataOnlyOnce = () => {
  //   fetch('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products', {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' },
  //   }).then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   }).then(res => {
  //     dispatch(setAllProducts(res))
  //     console.log(products);
  //     console.log('work');
  //   })
  // }

  useEffect(() => {
    loadProducts();
  }, [])
  
  async function loadProducts() {
    await axios.get('https://64467aa1ee791e1e2900569a.mockapi.io/api/store/products') 
      .then((res) => {
        console.log(res.data);
        console.log(products);
        dispatch(setAllProducts(res.data));
        // return res.json();
      })
      // .then((data) =>{
      //   console.log(data);
      //   dispatch(setAllProducts(data.data));
      // })
  }

  const dispatch = useDispatch();

  return (
    // <div className='flex h-full'>
    //   <div className='flex items-center justify-between flex-col bg-white w-[72px] h-full rounded-xl text-slate-700'>
    //     <div className='flex flex-col gap-8 mt-8'>
    //       <img src={logo} alt="logo" className='w-6 h-auto' />
    //       <img src={menuIcon} alt="menu" className='w-6 h-auto' />
    //       <img src={shopIcon} alt="shop" className='w-6 h-auto' />
    //       <img src={bagIcon} alt="bag" className='w-6 h-auto' />
    //     </div>
    //     <div className='flex justify-center items-center mb-8 h-10 w-10 rounded-[10px] bg-ui-danger'>
    //       <img src={Exit} alt="exit" className='w-6 h-auto'/>
    //     </div>
    //   </div>
    //   <ItemsList />
    //   <BagList />
    // </div>
    <LoginPage />
  )
}

export default App
