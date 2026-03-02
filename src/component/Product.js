import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
function Product(prop) {
    let [products, setproducts] = useState([])
    useEffect(function () {
        fetch("https://fakestoreapi.com/products")
            .then(function (e) { return e.json() })
            .then(function (ee) { return setproducts(ee) })
    }, [])
    let productId = useParams().id
    let productJsx = products.filter(function (e) {
        return e.id.toString() === productId
    }).map(function (ele) {
        return (
            <div className="print" key={ele.id}>
                <div className="img">
                    <img src={ele.image} alt="" />
                </div>
                <div className="info">
                    <p className="titel">{ele.title}</p>
                    <p className="category">{ele.category}</p>
                    <div className="rating">
                        <div className="starts" style={{ width: `calc(${ele.rating.rate} * 100px / 5)` }}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="rate">{ele.rating.rate}/5</p>
                    </div>
                    <p className="price">{ele.price}$</p>
                    <p className="description">{ele.description}</p>
                    <hr />
                    <div className="button" onClick={addToCart}>
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>
        )
    })
    function addToCart() {
        prop.setData(function (prv) {
            let newArr = [...prv, products[productId - 1]]
            return newArr
        })
    }
    return (
        <section className="product-info">
            <div className="container">
            <h1>product</h1>
                {productJsx}
            </div>
        </section>
    )
}
export default Product