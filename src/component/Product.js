import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
function Product(prop) {
    let productId = useParams().id
    let productJsx = prop.products.filter(function (e) {
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
                    <div className="button" onClick={
                    function(){
                        if (prop.data.includes(ele)){
                            ele.repetition = ele.repetition  + 1
                        }else {
                            prop.setData(function(prv){
                                let newArr = [...prv]
                                newArr.push(ele)
                                return newArr
                            })
                        }
                    }
                }>
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>
        )
    })
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