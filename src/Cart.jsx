import { Outlet, Link } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext, useState } from "react";

const Cart = () => {
    const { allProducts, cart, removeFromCart, updateQty, viewCart } = useContext(MyContext);

    const [query, setQuery] = useState("");

    const [resultset, setResultset] = useState([]);

    let myResultset = [];

    function searchResult(product) {
        return product.name.toLowerCase().includes(query.toLowerCase());
    }

    const searchItem = (event) => {
        let q = event.target.value;
        setQuery(event.target.value);
        if (q === "") {
            setResultset(allProducts.filter(searchResult));
        } else {
            setResultset(allProducts.filter(searchResult));
        }
    }

    myResultset = resultset.map((product, index) => {
        return (
            <Link to={`/product/${product.id}`} key={index} className="grid-c-2 grid-m-2 fmld-mrg-bottom" onClick={() => { viewCart('#x-modal-popup') }}>
                <img src={product.images[0]} alt="" className="modal-cart-img"/>
                <div>
                    <div onClick={() => { }} className="fmld-mrg-tb" style={{ fontSize: "16px" }}>{product.name}
                    </div>
                    <div className="fmld-mrg-tb" style={{ fontSize: "18px" }}>{product.price} FCFA</div>
                </div>
            </Link>
        )
    });

    const myCart = cart.map((c, index) => {
        return (
            <div key={index} className="flex items-center justify-between gap-1 fmld-width-100 fmld-mrg-bottom">
                <Link to={`/product/${c.item}`}>
                    <img src={allProducts[c.item].images[0]} alt="" className="border-light fmld-rounded modal-cart-img" onClick={() => { viewCart('#z-modal-popup') }}/>
                </Link>

                <Link to={`/product/${c.item}`} className="flex-">
                    <div>{allProducts[c.item].name}</div>
                    <div className="fmld-mrg-tb" style={{ fontSize: "18px" }}>{allProducts[c.item].price} FCFA</div>
                </Link>

                <div >
                    <div onClick={() => { }} className="flex justify-end">
                        <button title="Supprimer" className="transparent fmld-large fmld-bold text-red" onClick={() => { removeFromCart(parseInt(c.item)) }}>&times;</button>
                    </div>

                    <div className="fmld-mrg-tb flex">
                        <button onClick={() => { updateQty(index, "MINUS_ONE") }} className="fmld-pdg-8 text-white">-</button>
                        <input onChange={()=>{}} style={{ width: "30px", border: "none", textAlign: "center" }} className="fmld-pdg-8" value={c.qty} min="1" />
                        <button onClick={() => { updateQty(index, "ADD_ONE") }} className="fmld-pdg-8 text-white">+</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className='modal-parent' id='z-modal-popup'>
                <div className='modal-underlay' onClick={() => { viewCart('#z-modal-popup') }}></div>
                <div className='fmld-modal fmld-anim-right'>
                    <h4 className="flex items-center justify-between gap-1 fmld-pdg-8">
                        <span className="fmld-large fmld-bold text-gray-black">Mes favoris <span style={{ background: "teal", borderRadius: "20px", color: "white", padding: "3px 5px", fontSize: "10px"}}>{cart.length}</span>
                        </span> 
                        
                        <button className="fmld-xlarge fmld-bold- fmld-pdg-left fmld-pdg-right text-white" onClick={() => { viewCart('#z-modal-popup') }}>&times;</button>
                    </h4>

                    <div className="fmld-pdg-8">
                        <div style={{overflowY:"scroll"}}>
                            {myCart}
                        </div>
                        
                        {cart.length >= 1 ?
                            <div className="b-btn">
                                <Link to="/checkout">
                                    <button onClick={()=> {viewCart('#z-modal-popup')}} className="btn fmld-mrg-tb fmld-pdg-16 fmld-zoom-out  text-white">Acheter maintenant</button></Link>
                            </div> :
                            <div className="">
                                <h2 className="fmld-mrg-bottom fmld-pdg-16">Votre liste de favoris est vide!</h2>
                                <svg className="fmld-anime-cart fmld-svg cart-svg" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                                </svg>

                                <div className="b-btn">
                                    <button className="fmld-mrg-tb fmld-pdg-16 fmld-zoom-out" onClick={() => { viewCart('#z-modal-popup') }}>Continuer ma navigation</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='modal-parent' id='x-modal-popup'>
                <div className='modal-underlay' onClick={() => { viewCart('#x-modal-popup') }}></div>
                <div className='fmld-modal fmld-anim-left' style={{right:"auto",left:"0%"}}>
                    <h4 className="flex items-center justify-between gap-1 fmld-mrg-16">
                        <label htmlFor="search" className="fmld-large fmld-bold text-gray-black">Rechercher quelquechose</label>
                        <button className="fmld-xlarge fmld-bold- fmld-pdg-left fmld-pdg-right text-white" onClick={() => { viewCart('#x-modal-popup') }}>&times;</button>
                    </h4>

                    <input id="search" className="fmld-width-90 fmld-pdg-8 fmld-mrg-right fmld-rounded fmld-mrg-left border-light" type="search" value={query} onInput={searchItem} placeholder="Tapez ici pour rechercher" autoFocus />

                    <div className="fmld-mrg-16">
                        {myResultset.length === 0 ? <p className="fmld-mrg-bottom fmld-pdg-16 text-gray fmld-xlarge">Vos resultats de recherches s'afficheront ici!</p> : myResultset}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;