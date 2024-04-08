
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store.js'; 
import  App  from './components/App/App.jsx';
import "modern-normalize";
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
         <ThemeProvider theme={theme}>
           <App />
         </ThemeProvider>
        </BrowserRouter>  
      </PersistGate>  
    </Provider>   
  </React.StrictMode>
);