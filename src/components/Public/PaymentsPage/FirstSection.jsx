import React from "react";
import styles from "../styling/PaymentsPage.module.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function FirstSection({ handlePayment }) {
  const stripe = useStripe();
  const elements = useElements();
  const handlePaymentGateway = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        console.log("Stripe 23 | token generated!", paymentMethod);

        handlePayment(id);
        //send token to backend here
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className={styles.contact}>
        <div>
          <span>Share your contact details</span>
        </div>
        <div className={styles.contact_details}>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Nobile number" />
          <button style={{ marginBottom: "-5px", color: "white" }}>
            continue
          </button>
        </div>
      </div>
      <div className={styles.contact}>
        <div>More Payment options</div>
        <div className={styles.StoredCard}>
          <div className={styles.sidebar}>
            <div style={{ background: "white" }}>Credit / Debit card</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.cardDetails}>
            <span>Enter your card details</span>
            <div className={styles.sampleCard}>
              <div style={{ fontSize: "13px", color: "gray" }}>Card Number</div>
              <CardElement />

              <div className={styles.otherDetails}>
                {/* <div>
                                <div style={{fontSize:'13px', color:'gray'}}>Expiry</div>
                                <div style={{display:'flex'}}>
                                    <input type="text" placeholder="MM" value="06"/>
                                    <input type="text" placeholder="YY" value="23"/>
                                </div>
                            </div>

                            <div>
                                <div style={{fontSize:'13px', color:'gray'}}>CVV</div>
                                <div>
                                    < input style={{width:"50px"}} type="text" placeholder="CVV"  value="933"/>
                                </div>
                            </div> */}
              </div>
            </div>

            <div className={styles.payment}>
              <button onClick={handlePaymentGateway}>Make Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
