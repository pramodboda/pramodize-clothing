import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IGSWnD3zkTWVu5UtK1N1Aihfv3JDLf2OweykIszSKWIjB8WFIfwM91QaR6hd09XqvBGB0153FOYzYEl6kzGMZrM00aG4vPjG5';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Pramodize Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
