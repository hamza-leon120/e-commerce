import { faStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
function Products (prop){
    let productsJsx = prop.products.map(function(ele){
        return (
            <div className="product" key={ele.id}>
                <Link to = {`/product/${ele.id}`}>                
                    <div className="img">
                        <img src= {ele.image} alt="" />
                    </div>
                    <div className="info">
                        <p className="title">{ele.title}</p>
                        <div className="rating">
                            <div>
                                <div className="star" style={{width: `calc(${ele.rating.rate} * 100% / 5)`}}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <p className="rate">{ele.rating.rate}/5</p>
                        </div>
                        <p className="price">{ele.price}$</p>
                    </div>
                </Link>
                <div className="add-button" onClick={
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
                    <p>add to cart</p>
                </div>
            </div>
        )
    })
    let nav = useNavigate()
    function changeUrl (){
        nav("/cart")
    }
    return (
        <section className="products">
            <div className="container">
                <h1 className="titel">products</h1>
                <div className="print">
                    {productsJsx}
                </div>
            </div>
        </section>

    )
}
export default Products