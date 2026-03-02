import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
function Header(){
    let nav = useNavigate()
    return (
        <header>
            <div className="container">
                <h1>e-commerce</h1>
                <ul>
                    <li onClick={function(){nav('/')}}>products</li>
                    <li onClick={function(){nav('cart')}}><FontAwesomeIcon icon={faCartShopping}/></li>
                </ul>
            </div>
        </header>
    )
}
export default Header