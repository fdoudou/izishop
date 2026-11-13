import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext } from "react";
import applogo from "./assets/applogo.png";

const Layout = () => {
    const { productListing, cart, addToCart, removeFromCart, updateQty, viewCart,hideModal,showModal } = useContext(MyContext);

    return (
        <header className="">
            <div className="flex items-center justify-between border-bottom-light" style={{ background:"white", zIndex:"9", position:"sticky", top:"0px",height:"65px"}}>
                <Link className="fmld-mrg-left fmld-hide-mobile white flex items-start fmld-pdg" to="/"><img src={applogo} width="50px" height="50px" alt="" /></Link>
                <form method="dialog" className="flex items-center justify-center fmld-pdg-left fmld-pdg-right header-container fmld-hide-mobile">
                    <span className="fmld-pdg-16"><Link to="/">Acceuil</Link></span>
                    <span className="fmld-pdg-16"><Link to="/category">Catégories</Link></span>
                    <span className="fmld-pdg-16"><Link to="/category/plantes-mixtes">Produits</Link></span>
                    <span className="fmld-pdg-16"><button type="button" className="fmld-medium fmld-pdg-8 fmld-round text-white primary transition" onClick={()=>{showModal(('connect-form'))}}>Connexion</button></span>
                </form>
                <div className="">
                    <button style={{position:"absolute",top:"15px",display: "inline-block",}} className="btn fmld-pdg-8 white fmld-zoom-out fmld-hide-nomobile" onClick={() => { viewCart('#c-modal-popup') }}>
                        <svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    <span id="applogo-mobile" className="fmld-hide-nomobile flex items-center justify-center fmld-absolute fmld-width-100-" style={{zIndex:"9", position:"absolute",top:"10px",left:"45%"}}><Link className="fmld-pdg fmld-round" to="/"><img src={applogo} width="35px" height="35px" alt="app logo"/></Link></span>

                    <div className=" fmld-right-" style={{position:"absolute",right:"0px",top:"15px",display: "inline-block",width:"100px"}}>
                        <button className="fmld-pdg-8 btn white fmld-zoom-out" onClick={() => { viewCart('#x-modal-popup') }}>
                            <svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        <button className="fmld-pdg-8 btn white fmld-zoom-out" onClick={() => { viewCart('#z-modal-popup') }}>
                            <svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                            </svg><span style={{ background: "turquoise", borderRadius: "18px", color: "white", padding: "3px 5px", fontSize: "10px" }}>{cart.length}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='modal-parent fmld-hide-nomobile' id="c-modal-popup">
                <div className='modal-underlay' onClick={() => { viewCart('#c-modal-popup') }}></div>
                <div className='fmld-modal overlay-content fmld-anim-left fmld-pdg-top' style={{right:"auto",left:"0%"}}>
                    <span className="fmld-pdg-16" onClick={() => { viewCart('#c-modal-popup') }}><Link  className="nav-btn-mobile" to="/">Acceuil</Link></span>
                    <span className="fmld-pdg-16" onClick={() => { viewCart('#c-modal-popup') }}><Link  className="nav-btn-mobile" to="/category/plantes-interieurs">Catégories</Link></span>
                    <span className="fmld-pdg-16" onClick={() => { viewCart('#c-modal-popup') }}><Link  className="nav-btn-mobile" to="/category/plantes-exterieurs">Produits</Link></span>
                    <span className="fmld-pdg-16" onClick={() => { viewCart('#c-modal-popup') }}><Link  className="nav-btn-mobile" to="/category/plantes-mixtes">Panier</Link></span>
                    <span className="fmld-pdg-16"><button type="button" className="fmld-medium fmld-pdg-8 fmld-round text-white primary transition" onClick={()=>{showModal(('connect-form'))}}>Connexion</button></span>
                    <button className="fmld-xlarge fmld-bold- fmld-pdg-left fmld-pdg-right text-white" style={{ position: "absolute", top: "16px", right: "16px" }} onClick={() => { viewCart('#c-modal-popup') }}>&times;</button>
                </div>
            </div>
            <Outlet />
        </header>
    )
}

export default Layout