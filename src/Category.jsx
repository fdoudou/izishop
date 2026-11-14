import { Outlet,Link, useParams } from "react-router-dom";
import { MyContext } from "./Contextor";
import { useContext } from "react";
import Cart from "./Cart";
import Footer from "./Footer";

const Category = () => {
    const {allProducts,cart,addToCart,removeFromCart,updateQty,viewCart, inCart} = useContext(MyContext);

    const {category} = useParams();

    function categoryProduct(product) {
        return product.category === category
    }

    let productListing = typeof(category)!=="undefined"?allProducts.filter(categoryProduct):allProducts;

    productListing = productListing.map((product,index) => {
        return (
            <div key={index} className="border-light fmld-rounded">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.images[0]} loading="lazy" className="product-img" alt={product.name}></img>
                        <p className="fmld-pdg-left fmld-pdg-right">
                            <span>{product.name}</span><br/>
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
            <main className="container fmld-mrg-top fmld-mrg-bottom fmld-height-80vh">
                <ul className="fmld-breadcrumb">
                    <li><Link className="fmld-medium" to="/">Acceuil</Link></li>
                    <li><Link className="fmld-medium" to="/category">Categories</Link></li>
                    <li className="fmld-medium fmld-capitalize text-primary">{category}</li>
                </ul>
                <nav className="flex items-center justify-center gap-1 fmld-width-100 fmld-mrg-tb" style={{overflow:"scroll"}}>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-yellow text-white-"><Link to="/category/legumes">Legumes</Link></button>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-blue text-white-"><Link to="/category/dejeuner">Dejeuner</Link></button>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-pink text-white-"><Link to="/category/snacks">Snacks</Link></button>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-green text-whit-e"><Link to="/category/fruits">Fruits</Link></button>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-orange text-white-"><Link to="/category/autres">Autres</Link></button>
                    <button style={{flexShrink:0}} className="fmld-mrg-tb fmld-mrg fmld-pdg-8 pale-red text-white-"><Link to="/category/boissons">Boissons</Link></button>
                </nav>
                <section className="fmld-pdg-16">
                    <div className="flex items-center fmld-pdg-bottom">
                        <h1 className="fmld-pdg-right fmld-upper- text-gray-dark fmld-xlarge fmld-bold-500">{typeof(category)==="undefined"?"Tous nos produits":category}</h1> <span className="">{productListing.length} produit-s </span>
                    </div>
                    
                    
                    {productListing.length >= 1 ? 
                    <div className="grid-repeat gap-2">{productListing}</div> :
                    <div className="fmld-center">
                        <p className="fmld-xxlarge">Erreur</p>
                        <p className="fmld-xxlarge">Désolé, aucun résultat n'a été trouvé!</p>
                    </div>}
                </section>
            </main>
            <Cart/>
            <Footer/>
        </>
    )
}

export default Category;