import { Outlet,Link } from "react-router-dom";
import Cart from "./Cart";
import Footer from "./Footer";

const Nopage = () => {
    return (
        <>
            <div className="fmld-height-80vh">
                <h3 className="fmld-pdg-16">
                    <p>Erreur</p>
                    <p>Désolé, cette page est introuvable!</p>
                </h3>
            </div>
            <Cart/>
            <Footer/>
        </>
    )
}

export default Nopage;