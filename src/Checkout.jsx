import { Outlet, Link, useParams } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext } from "react";
import Cart from "./Cart";
import Footer from "./Footer";

import om from "./assets/om.jpeg";
import wave from "./assets/wave.png";
// import wari from "./assets/wari.jpeg";

const Checkout = () => {
    const { allProducts, cart, addToCart, removeFromCart, updateQty, viewCart } = useContext(MyContext);

    let sumPrice = 0;

    const myCheckoutCart = cart.map((c, index) => {
        sumPrice += allProducts[c.item].price * c.qty;
        return (
            <div key={index} className="flex items-center justify-between gap-1 fmld-width-100 fmld-mrg-bottom">
                <Link to={`/product/${c.item}`}>
                    <img className="border-light fmld-rounded modal-cart-img" alt={allProducts[c.item].name} src={allProducts[c.item].images[0]}></img>
                </Link>
   
                <div onClick={() => { }} className="fmld-mrg-tb">
                    <Link className="fmld-mrg-bottom" to={`/product/${c.item}`}>{allProducts[c.item].name}</Link> 
                    <span className="flex items-center wrap justify-between">
                        <button onClick={() => { updateQty(index, "MINUS_ONE") }} className="fmld-pdg-8">-</button>
                        <input style={{ width: "30px", border: "none", textAlign: "center" }} className="fmld-pdg-8" value={c.qty} min="1" />
                        <button onClick={() => { updateQty(index, "ADD_ONE") }} className="fmld-pdg-8">+</button>
                    </span>
                </div>

                <div className="fmld-mrg-tb" style={{ fontSize: "18px" }}>{allProducts[c.item].price} FCFA</div>

                <div className="fmld-mrg-tb">
                    <button title="Supprimer" className="transparent fmld-large fmld-bold text-red border-red" onClick={() => { removeFromCart(c.item) }}>&times;</button>
                </div>
            </div>
        )
    });

    return (
        <>
            <main className="container fmld-mrg fmld-mrg-tb fmld-height-80vh">
                {cart.length >= 1 ?
                    <div className="grid-repeat-2 row-gap-2 column-gap-3 fmld-mrg fmld-mrg-top fmld-pdg-top fmld-pdg-bottom">
                        <div >
                            <div className="flex items-center fmld-pdg-bottom">
                                <h2 className="fmld-pdg-right text-gray-dark">
                                Mon panier
                                </h2>
                                <span className="text-primary fmld-medium">({cart.length}) articles-s</span>
                            </div>
                            
                            
                            <div className="flex items-center justify-between gap-1 ">
                                <span className="fmld-pdg-bottom fmld-bold fmld-small fmld-upper text-gray">Details produit</span>
                                <span className="fmld-pdg-bottom fmld-bold fmld-small fmld-upper text-gray">Qté</span>
                                <span className="fmld-pdg-bottom fmld-bold fmld-small fmld-upper text-gray">Prix</span>
                                <span className="fmld-pdg-bottom fmld-bold fmld-small fmld-upper text-gray">Actions</span>
                            </div>
                            {myCheckoutCart}

                        <div className="fmld-pdg-top">
                            <Link to="/" className="fmld-mrg-tb fmld-pdg-16 fmld-zoom-out text-primary" onClick={() => { viewCart('#z-modal-popup') }}>
                            ← Continuer ma navigation
                            </Link>
                        </div>
                        </div>
                        <form className="border-light fmld-pdg-16 pale-gray">
                            <h4 className="text-gray-dark">Réglez votre commande</h4>
                            
                            <div className="fmld-pdg-bottom-8 fmld-width-100 form-control fmld-pdg-top-8 border-top-light">
                                <label htmlFor="lastname" className="form-label fmld-bold fmld-small fmld-left fmld-upper text-gray-dark">Nom complet</label>
                                <div className="fmld-width-100 fmld-mrg-top-8">
                                    <input type="text" name="lastname" className="border-light fmld-width-100 fmld-pdg-8" id="lastname" placeholder="Nom complet" required/>
                                    <div className="invalid-feedback fmld-small fmld-pdg">
                                    </div>
                                </div>
                            </div>
                            
                            <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
                                <label for="phonenumber"
                                    className="form-label fmld-bold fmld-small fmld-pdg-bottom fmld-left fmld-upper text-gray-dark">Numéro de téléphone</label>
                                <div className="fmld-width-100 fmld-mrg-top-8">
                                    <input type="tel" inputmode="numeric" name="phonenumber" minlength="9" maxlength="9"
                                        pattern="^\d+$"
                                        className="border-light fmld-width-100 fmld-pdg-8"
                                        id="phonenumber" placeholder="Numéro de téléphone" required/>
                                    <div className="invalid-feedback fmld-small fmld-pdg">
                                    </div>
                                </div>
                            </div>
                            
                            <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
                                <label for="city"
                                    className="form-label fmld-bold fmld-small fmld-pdg-bottom fmld-left fmld-upper text-gray-dark">Adresse de livraison</label>
                                {/* <div className="fmld-width-100 fmld-mrg-top-8">
                                    <select name="city" id="city" className="border-light fmld-width-100 fmld-pdg-8" required>
                                        <option className="fmld-pdg-8 fmld-width-100" value="" selected>Choisir une option</option>
                                        <option className="fmld-pdg-8 fmld-width-100" value="Ville 1">Ville 1</option>
                                        <option className="fmld-pdg-8 fmld-width-100" value="Ville 2">Ville 2</option>
                                    </select>
                                    <div className="invalid-feedback fmld-small fmld-pdg">
                                    </div>
                                </div> */}
                                <dl className="flex items-center justify-between gap-1">
                                    <dt className="fmld-bold-">Selectionnez votre adresse.</dt>
                                    <dd className="fmld-right">
                                        <button type="button" className="fmld-pdg-8 transparent fmld-medium text-primary">
                                            Selectionner
                                        </button>
                                    </dd>
                                </dl>
                            </div>

                            
                            <div className="fmld-pdg-bottom- fmld-width-100 form-control">
                                <label for="pay-method"
                                    className="form-label fmld-bold fmld-small fmld-pdg-bottom fmld-left fmld-upper text-gray-dark">Méthode de paiement</label>
                                <div className="fmld-width-100 fmld-mrg-top-8">
                                    <select name="pay-method" id="pay-method" className="border-light fmld-width-100 fmld-pdg-8" required>
                                        <option className="fmld-pdg-8 fmld-width-100" value="Ville 1">Paiement en ligne</option>
                                        <option className="fmld-pdg-8 fmld-width-100" value="Ville 2">Paiement à la livraison</option>
                                    </select>
                                    <div className="invalid-feedback fmld-small fmld-pdg">
                                    </div>
                                </div>
                            </div>

                            <dl className="flex items-center justify-between gap-1 fmld-pdg-top-8 border-top-light">
                                <dt className="fmld-bold-">Frais d'expédition: </dt>
                                <dd className="fmld-medium fmld-right">
                                    500F
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between gap-1 fmld-pdg-top-8">
                                <dt className="fmld-bold-">Taxe(2%): </dt>
                                <dd className="fmld-medium fmld-right">
                                    0F
                                </dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-1">
                                <dt className="fmld-bold text-gray-dark">Montant total:</dt>
                                <dd className="fmld-large fmld-pdg">
                                    {sumPrice} FCFA
                                </dd>
                            </dl>

                            <button type="submit" className="btn text-white fmld-large fmld-pdg-8 fmld-zoom-out fmld-width-100">
                                Payer
                            </button>
                        </form>
                    </div> :
                    <div className="fmld-mrg fmld-mrg-tb">
                        <h2 className="fmld-mrg-bottom fmld-pdg-16">Votre liste de favoris est vide!</h2>
                        <svg className="fmld-anime-cart fmld-svg cart-svg" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                        </svg>

                        <div className="fmld-pdg-16">
                            <Link to="/">
                                <button className="fmld-mrg-tb fmld-pdg-16 fmld-zoom-out" onClick={() => { viewCart('#z-modal-popup') }}>
                                &larr; Continuer ma navigation
                                </button>
                            </Link>
                        </div>
                    </div>}
            </main>

            <Cart />
            <Footer />
        </>
    )
}

export default Checkout;