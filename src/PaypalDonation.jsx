import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalDonation = () => {
  const PAYPAL_CLIENT_ID = 'AS5gyGIGmISI51YuHxa77F4CYHxhRHvOfymUHp1O0xMtAQyiOWC7xLNiNjGpig93DLLjG0OepQUeT_6-';

  return (
    <PayPalScriptProvider options={{ 'client-id': 'AS5gyGIGmISI51YuHxa77F4CYHxhRHvOfymUHp1O0xMtAQyiOWC7xLNiNjGpig93DLLjG0OepQUeT_6-' }}>
      <div className="paypal-button-container">
      <PayPalButtons
        style={{ layout: 'horizontal', justifyContent: 'right' }} // Customize the layout as needed
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '10.00', // Adjust the donation amount as needed
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // Handle the approval of a successful donation here
          return actions.order.capture().then(function (details) {
            // Implement logic for a successful capture (e.g., display a thank you message)
            console.log('Transaction completed by ' + details.payer.name.given_name);
          });
        }}
      />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalDonation;
