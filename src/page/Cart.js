import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
function Cart(prop) {
    let total = 0
    let prodactInCartJsx = prop.data.map(function (ele, index) {
        total = total + (ele.price * ele.repetition)
        return (
            <div key={ele.id}>
                <div className="product">
                    <Link to={`/product/${ele.id}`}>
                        <div className="one">
                            <div className="img">
                                <img src={ele.image} alt="" />
                            </div>
                            <div className="info">
                                <p className="title">{ele.title}</p>
                                <p className="category">{ele.category}</p>
                                <p className="price">{ele.price}$</p>
                            </div>
                        </div>
                    </Link>
                    <div className="two">
                        <FontAwesomeIcon icon={faTrashCan} onClick={
                            function () {
                                prop.setData(function (prv) {
                                    let newArr = [...prv]
                                    newArr.splice(index, 1)
                                    return newArr
                                })
                            }
                        } />
                        <div className="repetition">
                            <p className="click" onClick={
                                function () {
                                    if (ele.repetition > 1) {
                                        prop.setData(function (prv) {
                                            let newArr = [...prv]
                                            Object.assign(newArr[index], {
                                                repetition: newArr[index].repetition - 1
                                            })
                                            return newArr
                                        })
                                    } else if (ele.repetition <= 1) {
                                        prop.setData(function (prv) {
                                            let newArr = [...prv]
                                            newArr.splice(index, 1)
                                            return newArr
                                        })
                                    }
                                }
                            }>-</p>
                            <p>{ele.repetition}</p>
                            <p className="click" onClick={
                                function () {
                                    prop.setData(function (prv) {
                                        let newArr = [...prv]
                                        Object.assign(newArr[index], {
                                            repetition: newArr[index].repetition + 1
                                        })
                                        return newArr
                                    })
                                }
                            }>+</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    })
    return (
        <section className="cart">
            <div className="container">
                <h1>Your cart</h1>
                <div className="print">
                    <div className="left">
                        {prop.data.length > 0 ? prodactInCartJsx : <p className="empty">Your cart is empty — start shopping now!</p>}
                    </div>
                    <div className="right">
                        <p className="titel">Order Summary</p>
                        <div>
                            <p>Subtotal</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <div>
                            <p>Delivery Fee</p>
                            <p>{total === 0 ? "$0" : "$15"}</p>
                        </div>
                        <hr />
                        <div className="total">
                            <p>total</p>
                            <p>${(total === 0 ? 0 : total + 15).toFixed(2)}</p>
                        </div>
                        <div className="button">
                            <p>Go to Checkout</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart