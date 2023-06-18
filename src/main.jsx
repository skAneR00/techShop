import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store/store.js'
import MainPage from './components/mainPage.jsx'
import ItemsList from './components/itemsList.jsx'
import AdminPage from './components/adminPage.jsx'
import BagPage from './components/bagPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "main",
    element: <MainPage />,
    children: [
      {
        path: "store",
        element: <ItemsList />
      },
      {
        path: "bag",
        element: <BagPage />
      }
    ]
  },
  {
    path: "admin",
    element: <AdminPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
