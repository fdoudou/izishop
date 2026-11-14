import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import applogo from "./assets/applogo.png";

const Footer = () => {
    return (
        <footer className="fmld-pdg-16 accent fmld-relative" style={{bottom: "0px"}}>
            <div className="grid-repeat gap-1">
              {/* <!-- Brand --> */}
              <div>
                <a href="./index.html">
                    <img src={applogo} width="35px" height="35px" alt="app logo" className="flex items-start fmld-pdg"/>
                </a>
                <p className="mt-2 text-sm text-gray-dark fmld-bold-500">Izi Shop - Des produits d'alimentation générale au meilleur prix!</p>
              </div>
        
              {/* <!-- Quick Links --> */}
              <div>
                  <h4 className="text-gray-dark">Liens rapides</h4>
                  <ul className="fmld-list-nobullet fmld-pdg-0">
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/">Acceuil</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/category">Categories</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/nopage">Produits</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><Link to="/checkout">Panier</Link></li>
                      <li className="fmld-pdg-bottom text-gray-dark"><a href="/account">Mon compte</a></li>
                  </ul>
              </div>
        
              {/* <!-- Socials --> */}
              <div>
                <h4 className="text-gray-dark">Contacts</h4>
                <p className="text-gray-dark"><a href="mailto:contact@frameloadshop.com" className=" text-gray-dark"> contact@izishop.web.app</a></p>
                <p className="text-gray-dark">Téléphone: <a href="tel:+221707981934">+0123456789</a></p>
                <p className="text-gray-dark">Adresse: Dakar, Senegal</p>
              </div>
        
              {/* <!-- Socials --> */}
              <div>
                <h4 className="text-gray-dark">Besoin d'aide?</h4>
                <ul className="fmld-list-nobullet fmld-pdg-0">
                    <li className="fmld-pdg-bottom text-gray-dark"><Link to="/delivery">Infrmation livraison</Link></li>
                    <li className="fmld-pdg-bottom text-gray-dark"><Link to="/returns">Retours et remboursements</Link></li>
                    <li className="fmld-pdg-bottom text-gray-dark"><Link to="/payments">Methodes de paiement</Link></li>
                    <li className="fmld-pdg-bottom text-gray-dark"><Link to="/my-orders">Suivre ma commande</Link></li>
                </ul>
              </div>
            </div>
        
            <div className="fmld-center fmld-pdg-top border-top-light text-gray-dark">
              © 2026 Doudou Fall. All rights reserved.
            </div>
            <Outlet />
        </footer>
    )
}

export default Footer