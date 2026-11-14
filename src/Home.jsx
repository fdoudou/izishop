import { Outlet, Link } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext, useState } from "react";
import main_banner_alt from "./images/main_banner_alt.webp";
import footer_banner from "./images/footer_banner.webp";
import organic_vegitables from "./images/organic_vegitables.webp";
import instant_products from "./images/instant_products.webp";
import fresh_fruits from "./images/fresh_fruits.webp";
import pause_cafe from "./images/pause-cafe.webp";
import boissons from "./images/boissons.webp";
import alimentation from "./images/alimentation.webp";
import applogo from "./assets/applogo.png";
import truck from "./assets/truck.svg";
import leaf from "./assets/leaf.svg";
import coin from "./assets/coin.svg";
import trust from "./assets/trust.svg";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = () => {

    const { productListing, allProducts, cart, addToCart, removeFromCart, updateQty, viewCart, inCart } = useContext(MyContext);

    const listing = productListing.slice(1, 9).map((product, index) => {
        return (
            <div key={index} className="border-light fmld-rounded">
                <Link to={`product/${product.id}`}>
                    <img src={product.images[0]} loading="lazy" className="product-img" alt={product.name}></img>
                    <p className="fmld-pdg-left fmld-pdg-right">
                        <span>{product.name}</span><br />
                        <span>{product.price} FCFA</span>
                    </p>
                </Link>
                <div className="flex items-center justify-center gap-1">
                    {inCart(product.id) ? <button className="btn fav-btn accent text-primary fmld-zoom-out" onClick={() => { removeFromCart(parseInt(product.id)) }}><svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                    </svg> Retirer des favoris</button> : <button className="btn fav-btn accent text-primary fmld-zoom-out" onClick={() => { viewCart('#z-modal-popup'); addToCart(product.id, 1) }}><svg className="fmld-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"></circle><circle cx="18" cy="20.5" r="1"></circle><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                    </svg> Ajouter aux favoris</button>}
                </div>
            </div>
        )
    })

    return (
        <>
            <main className="container fmld-mrg-top fmld-mrg-bottom fmld-pdg-top fmld-pdg-bottom fmld-height-80vh">
                {/* <!-- bannière principale --> */}
                <section id="home-banner" className="fmld-banner grid-c-1 fmld-mrg-16 fmld-rounded" style={{background:`url(${main_banner_alt}) no-repeat center/cover`}}>
                    <div className="grid-c-1 gap-1 items-center align-self-center justify-start fmld-pdg-left fmld-pdg-right">
                        <h1 className="fmld-xxlarge fmld-pdg-left fmld-pdg-right flex fmld-center items-center justify-center fmld-width-400-l text-gray-dark" style={{textWrap:"balance"}}>
                        Bienvenu sur Izi Shop! Ici, vous trouverez une large selection des produits au meilleur prix!</h1>
                        <div className="flex wrap gap-1 items-center justify-start justify-center-m fmld-pdg-left fmld-pdg-right">
                            <Link to="/category" className="fmld-medium fmld-pdg-16 btn text-white primary fmld-bold-500 transition">Acheter maintenant</Link>
                            <Link to="/category" className="fmld-pdg-16 fmld-zoom-out text-primary fmld-bold-500" onClick={() => { viewCart('#z-modal-popup') }}>
                            Explorer nos catégories →
                            </Link>
                        </div>
                    </div>
                    
                </section>

                {/* <!-- catégories --> */}
                <section className="fmld-white fmld-pdg-top">
                    <h2 className="fmld-pdg-left text-gray-dark fmld-bold-500">Catégories</h2>
                    <div className="grid-repeat-4 gap-2 fmld-pdg-16">
                        <div className="pale-yellow fmld-rounded">
                            <a href="/category/legumes"><img className="category-img fmld-center"
                                    src={organic_vegitables} alt="Legumes" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Legumes</span></p>
                            </a>
                        </div>
                        <div className="pale-blue fmld-rounded">
                            <a href="/category/dejeuner"><img className="category-img fmld-center"
                                    src={pause_cafe} alt="Dejeuner" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Dejeuner</span></p>
                            </a>
                        </div>
                        <div className="pale-pink fmld-rounded">
                            <a href="/category/snacks"><img className="category-img fmld-center"
                                    src={instant_products} alt="Snacks" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Snacks</span></p>
                            </a>
                        </div>
                        <div className="pale-green fmld-rounded">
                            <a href="category/fruits"><img className="category-img fmld-center"
                                    src={fresh_fruits} alt="Fruits" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Fruits</span></p>
                            </a>
                        </div>
                        <div className="pale-orange fmld-rounded">
                            <a href="/category/autres"><img className="category-img fmld-center"
                                    src={alimentation} alt="Autres" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Autres</span></p>
                            </a>
                        </div>
                        <div className="pale-red fmld-rounded">
                            <a href="/category/boissons"><img className="category-img fmld-center"
                                    src={boissons} alt="Boissons" loading="lazy"></img>
                                <p className="fmld-center fmld-bold-500 text-gray-dark"><span>Boissons</span></p>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="fmld-white fmld-pdg-top">
                    <h2 className="fmld-pdg-left text-gray-dark fmld-bold-500">Nos produits les plus populaires</h2>
                    <div className="grid-repeat gap-2 fmld-pdg-16">
                        {listing}
                    </div>
                </section>
                
                <section id="footer-banner" className="fmld-banner grid-c-1 fmld-mrg-16 fmld-mrg-top fmld-pdg-bottom fmld-rounded" style={{background:`url(${footer_banner}) no-repeat center/cover`}}>
                    <div className="grid-repeat-2 gap-1 grid-center align-self-center fmld-pdg-8">
                        <div className="fmld-pdg-top-">
                            <h2 className="fmld-xxlarge flex fmld-center- items-center justify-center fmld-pdg text-gray-dark">Pourquoi choisir Izi Shop?</h2>
                            <div className="fmld-center">
                                <img src={applogo} width="175px" height="175px" alt="logo Izishop" />
                            </div>
                        </div>
                        <div className="fmld-mrg-8 fmld-mrg-top-8"> 
                            <div className="flex items-center gap-1">
                                <img alt="Livraison rapide" className="" src={truck}/>
                                <div className="fmld-mrg-top-8">
                                    <h3 className="fmld-large fmld-bold fmld-mrg-0 text-gray-dark">Livraison rapide</h3>
                                    <p className="text-gray-black fmld-mrg-top-8 fmld-mrg-top">Courses livrées en moins de 45 minutes.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <img alt="Fraîcheur garantie" className="" src={leaf} />
                                <div className="fmld-mrg-top-8">
                                    <h3 className="fmld-large fmld-bold fmld-mrg-0 text-gray-dark">Fraîcheur garantie</h3>
                                    <p className="text-gray-black fmld-mrg-top-8">Des produits frais, directement à la source..</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <img alt="Prix ​​abordables" className="" src={coin} />
                                <div className="fmld-mrg-top-8">
                                    <h3 className="fmld-large fmld-bold fmld-mrg-0 text-gray-dark">Prix ​​abordables</h3>
                                    <p className="text-gray-black fmld-mrg-top-8">Des produits alimentaires de qualité à des prix imbattables.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <img alt="Approuvé par nos clients" className="" src={trust} />
                                <div className="fmld-mrg-top-8">
                                    <h3 className="fmld-large fmld-bold fmld-mrg-0 text-gray-dark">Approuvé par nos clients</h3>
                                    <p className="text-gray-black fmld-mrg-top-8">Adoré par plus de 10 000 clients satisfaits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Cart />
            <Footer />
        </>
    )
}

export default Home;