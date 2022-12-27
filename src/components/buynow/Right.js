import React from 'react'
import "./buynow.css"

const Right = () => {
    return (
        <div className="right_buy">
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery.</p><br />
                <span style={{ color: "#565959" }}> Select this option at checkout. Details</span>

                <h3>Subtotal (1 items): <span style={{ fontWeight: "700" }}> 2000.00</span></h3>
                <button className="rightbuy_btn">Proceed to Buy</button>
                <div className="emi" >
                    Emi available

                </div>
            </div>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/3ce17addcf90b8cd3952b8ae0ffc1299.png" alt="rightimg" />

        </div>
    )
}

export default Right