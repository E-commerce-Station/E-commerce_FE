import React from 'react'
import { Divider } from '@mui/material'
import Option from './Option'
import Right from './Right'
import Subtotal from './Subtotal'
import "./buynow.css"


const Buynow = () => {
    return (
        <div className="buynow_section">
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select all items</p>
                    <span className="leftbuyprice">Price</span>
                    <Divider />

                    <div className="item_containert" >
                        <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg" alt="imgitem" />
                        <div className="item_details">
                            <h3>Táo</h3>
                            <h3>Thông tin sản phẩm  </h3>
                            <h3 className="diffrentprice">2000000.00</h3>
                            {/* reponsive giá tiền */}
                            <p className="unusuall">Usually dispatched in 8 days.</p>
                            <p>Eligible for FREE Shipping</p>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/6c502a2641457578b0d5f5153b53dd5d.png" alt="logo" />
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="logo" />

                            <Option />
                        </div>
                        <h3 className="item_price">200000.00</h3>
                    </div>
                    <Divider />
                    <Subtotal />
                </div>
                <Right />

            </div>
        </div>
    )
}

export default Buynow