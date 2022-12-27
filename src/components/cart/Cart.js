import { Divider } from '@mui/material'
import React from 'react'
import "./cart.css"

const Cart = () => {
    return (

        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51.jpg"alt="cart" />
                    <div className="cart_btn">
                        <button className="cart_btn1">Add to Cart</button>
                        <button className="cart_btn2">Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Tên sản phẩm</h3>
                    <h4>Loại sản phẩm+"thông số kỷ thuật"</h4>
                    <Divider />
                    <p className="mrp">M.R.P."giá gốc" : <del>20.000.000 đ</del></p>
                    <p>Táo : <span style={{ color: "#B12704" }}>20.00</span></p>
                    <p>You save : <span style={{ color: "#B12704" }}> 50% </span></p>

                    <div className="discount_box">
                        <h5>Discount : <span style={{ color: "#111" }}>Extra 10% off</span> </h5>
                        <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                        <p>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perspiciatis unde ratione labore ipsa laudantium inventore totam vitae cumque mollitia, tenetur repellat quibusdam fugit aspernatur deserunt non? At pariatur ut enim! Numquam inventore blanditiis, quos repellendus voluptatum maxime, distinctio assumenda ullam enim molestiae debitis. Sunt nemo facere libero blanditiis quam?</span></p>
                </div>
            </div>

        </div>
    )
}

export default Cart