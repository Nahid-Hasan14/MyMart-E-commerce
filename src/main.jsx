import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Routing/Router';
import { Provider } from 'react-redux';
import  store  from './App/store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <Router />
   <ToastContainer />
   </Provider>
  </React.StrictMode>
)
