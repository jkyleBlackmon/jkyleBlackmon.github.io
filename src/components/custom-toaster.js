import React from "react";
import { Toaster } from "react-hot-toast";
import './custom-toaster.css';

const toast_options = {
    className: 'toast-container',
    duration: 5000,
    style: {
        border: '3px solid #5BDAAD',
        padding: '16px',
        color: '#1B263B',
    },
    success: {
        style: {
            background: '#778DA9',
        },
        iconTheme: {
            primary: '#5BDAAD',
            secondary: '#1B263B'
        }
    },
    error: {
        style: {
            background: 'red',
        },
    },
};


const CustomToaster = () => {
    return(
        <div>
            <Toaster 
                position="bottom-center"
                gutter={8}
                toastOptions={toast_options}/>
        </div>
    );
};

export {CustomToaster};