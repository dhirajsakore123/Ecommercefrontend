import React, { useState } from 'react';
import axios from 'axios';

const Payment = (props) => {
    const [data, setData] = useState('');
    const handlePayment = async () => {
        try {
            await axios.post('https://ecommersbackend-lqqo.onrender.com/products/createorder',{
                amount:props.amount*100
            })
            .then((res)=>setData(res.data))
            .catch((err)=>console.log(err))
           

            const options = {
                key:`${data.key_id}`,
                amount:data.amount, 
                currency: 'INR',
                name: 'IShop',
                description: 'Payment for Purchase',
                order_id: data.order_id,
              
            };
           
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script)
            script.onload = () => {
                const rzp = new window.Razorpay(options);
                rzp.open();
                // Now you can use rzp to open the payment dialog
            }
            
        } catch (error) {
            console.error(error);
        }
    };

  


    return (
        <div>
            <button className='payment-btn1' onClick={handlePayment}>Make Payment</button>
        </div>
    );
};

export default Payment