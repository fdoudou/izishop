import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import applogo from "./assets/applogo.png";

const Footer = () => {
    return (
        <footer className="fmld-pdg-16 accent fmld-relative" style={{bottom: "0px"}}>
            <div className="grid-repeat gap-1">
              {/* <!-- Brand --> */}
              <div>
                <a href="./index.html">
                    <img src={applogo} width="25px" height="25px" alt="app logo" className="flex items-start fmld-pdg"/>
                </a>
                <p className="mt-2 text-sm text-gray-500">Izi Shop</p>
              </div>
        
              {/* <!-- Quick Links --> */}
              <div>
                  <h4 className="">Liens rapides</h4>
                  <ul className="fmld-list-nobullet fmld-pdg-0">
                      <li className="fmld-pdg-bottom"><Link to="/">Acceuil</Link></li>
                      <li className="fmld-pdg-bottom"><Link to="/category">Categories</Link></li>
                      <li className="fmld-pdg-bottom"><Link to="/nopage">Produits</Link></li>
                      <li className="fmld-pdg-bottom"><Link to="/checkout">Panier</Link></li>
                      <li className="fmld-pdg-bottom"><a href="/account">Mon compte</a></li>
                  </ul>
              </div>
        
              {/* <!-- Socials --> */}
              <div>
                <h4 className="">Contacts</h4>
                <p><a href="mailto:contact@frameloadshop.com" className=""> contact@izishop.web.app</a></p>
                <p>Téléphone: <a href="tel:+221707981934" className="">+0123456789</a></p>
                <p>Adresse: Dakar, Senegal</p>
              </div>
        
              {/* <!-- Socials --> */}
              <div>
                <h4 className="">Besoin d'aide?</h4>
                <ul className="fmld-list-nobullet fmld-pdg-0">
                    <li className="fmld-pdg-bottom"><Link to="/delivery">Infrmation livraison</Link></li>
                    <li className="fmld-pdg-bottom"><Link to="/returns">Retours et remboursements</Link></li>
                    <li className="fmld-pdg-bottom"><Link to="/payments">Methodes de paiement</Link></li>
                    <li className="fmld-pdg-bottom"><Link to="/my-orders">Suivre ma commande</Link></li>
                </ul>
              </div>
            </div>
        
            <div className="fmld-center ">
              © 2026 Doudou Fall. All rights reserved.
            </div>
            <Outlet />
        </footer>
    )
}

export default Footer