import { useEffect, useReducer,useRef,useState } from "react";
import { Routes,Route } from "react-router-dom";
import { MyContext } from "./Contextor";
import "./style.css";

import product1 from "./images/cerelac-sachet-de-50g.jpg";
import product2 from "./images/nectar-tropical-200ml.jpg";
import product3 from "./images/nescafe-classic.jpg";
import product4 from "./images/carottes-origine-senegal-x3.jpg";
import product5 from "./images/fanta-ananas-33cl.jpg";
import product6 from "./images/lait-demi-ecreme-candia.jpg";
import product7 from "./images/sucre-en-morceaux-souki.jpg";
import product8 from "./images/pommes-de-terre-origine-senegal-x5.jpg";
import product9 from "./images/poivrons-verts-origine-senegal-x3.jpeg";
import product10 from "./images/stylo-bic-4-couleurs-velours.jpg";
import product11 from "./images/school-pack-maped.jpg";
import product12 from "./images/tomates-origine-senegal-x3.jpg";
import product13 from "./images/tablette-de-bouillons-cube-maggi.jpg";
import product14 from "./images/pack-de-casamancaise-15l.jpg";
import product15 from "./images/lait-de-croissance-nido.jpg";
import product16 from "./images/liquide-vaisselle-madar.jpg";
import product17 from "./images/bananes-du-senegal-x3.jpg";

import Home from "./Home";
import Category from "./Category";
import Product from "./Product";
import Nopage from "./Nopage";
import Layout from "./Layout";
import Cart from "./Cart";
import Footer from "./Footer";
import Checkout from "./Checkout";
import ConnectForm from "./Connect.jsx";

export default function App(props) {

    let productListing = [
        
        {
            id:0,
            name:"nescafe classic",
            price:3500,
            category:"dejeuner",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product3,
                product3,
                product3,
                product3
            ]
        },
        {
            id:1,
            name:"carottes origine senegal",
            price:4000,
            category:"legumes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product4,
                product4,
                product4,
                product4
            ]
        },
        {
            id:2,
            name:"fanta ananas 33cl",
            price:3500,
            category:"boissons",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product5,
                product5,
                product5,
                product5
            ]
        },
        {
            id:3,
            name:"lait candia brique",
            price:3000,
            category:"dejeuner",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product6,
                product6,
                product6,
                product6
            ]
        },
        {
            id:4,
            name:"sucre en morceaux souki",
            price:5500,
            category:"dejeuner",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product7,
                product7,
                product7,
                product7
            ]
        },
        {
            id:5,
            name:"pommes de terre",
            price:3500,
            category:"legumes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product8,
                product8,
                product8,
                product8
            ]
        },
        {
            id:6,
            name:"jus tropical 200ml",
            price:6000,
            category:"boissons",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product2,
                product2,
                product2,
                product2
            ]
        },
        {
            id:7,
            name:"cerelac sachet 50g",
            price:5000,
            category:"snacks",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product1,
                product1,
                product1,
                product1
            ]
        },
        {
            id:8,
            name:"tomates origine senegal",
            price:3500,
            category:"legumes",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product12,
                product12,
                product12,
                product12
            ]
        },
        {
            id:9,
            name:"stylo bic 4 couleurs",
            price:3500,
            category:"autres",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product10,
                product10,
                product10,
                product10
            ]
        },
        {
            id:10,
            name:"liquide vaisselle madar",
            price:3500,
            category:"autres",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product16,
                product16,
                product16,
                product16
            ]
        },
        {
            id:11,
            name:"lait nido croissance",
            price:3500,
            category:"snacks",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product15,
                product15,
                product15,
                product15
            ]
        },
        {
            id:12,
            name:"bananes du senegal",
            price:3500,
            category:"fruits",
            dimensions:"18*35*21",
            availableQty:40,
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepturi enim cupidatat cupidatat voluptate nemo blanditiis at vitae odio culpa in deserunt in explicabo. Ab veniam explicabo reprehenderit beatae eius nostrud accusamus dolore eiusmod inventore accusamus. Consectetur ex ipsam modi fugit id similique ex.",
            images: [
                product17,
                product17,
                product17,
                product17
            ]
        }
    ]

    const allProducts = [...productListing];

    function viewCart (target) {
        if (document.querySelector(target).className === 'modal-parent') {
            document.querySelector(target).className = 'fmld-show';
        }   else {
            document.querySelector(target).className = 'modal-parent';
        }
    }
    
    let cstate = localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart'));
    
    const [cart,setCart] = useState(cstate);

    const inCart = (id) => {
        for (let c = 0; c < cart.length; c++) {
            if (id === cart[c].item) {
                return true;
            }
        }
        return false;
    }

    const addToCart = (id,qty) => {
        for (let c = 0; c < cart.length; c++) {
            if (id === cart[c].item) {
                return;
            }
        }
        setCart([...cart,{"item":id,"qty":qty}]);
    }

    const removeFromCart = (id) => {
        const oldCart = [...cart];
        for (let c = 0; c < oldCart.length; c++) {
            if (cart[c].item === id) {
                oldCart.splice(c,1);
                setCart([...oldCart]);
                return;
            }
        }
        // oldCart.splice(id,1);
        // setCart([...oldCart]);
    }

    useEffect (
        ()=>{
            localStorage.setItem('cart',JSON.stringify([...cart]));
        },[cart]
    )

    const updateQty = (id,action) => {
        let oldCart = [...cart];
        
        if (action === "ADD_ONE") {
            oldCart[id].qty = oldCart[id].qty + 1;
        } else if (action === "MINUS_ONE") {
            oldCart[id].qty = oldCart[id].qty > 1? oldCart[id].qty - 1: 1;
        }
        setCart([...oldCart]);
    }

    function hideModal(id) {
        document.getElementById(id).close();
    }
    
    function showModal(id) {
        document.getElementById(id).showModal();
    }

    function verifyForm() {
        const inputElements = document.getElementById('form').getElementsByTagName("*");
        
        for (let z = 0; z < inputElements.length; z++) {
            if (inputElements[z].tagName == 'INPUT' || inputElements[z].tagName == 'SELECT') {
                if (inputElements[z].validity.valueMissing || !inputElements[z].validity.valid) {
                    inputElements[z].closest('.form-control').querySelector('.invalid-feedback').innerHTML = inputElements[z].validationMessage;
                } else {
                    inputElements[z].closest('.form-control').querySelector('.invalid-feedback').innerHTML = inputElements[z].validationMessage;
                }
            }
        }
    }

    return (
            <MyContext.Provider value={{allProducts,productListing,cart,addToCart,removeFromCart,updateQty,viewCart,inCart,hideModal,showModal,verifyForm}}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}>
                        
                        </Route>
                        <Route path="category/:category" element={<Category/>}>
                        
                        </Route>
                        <Route path="category" element={<Category/>}>
                        
                        </Route>
                        <Route path="product/:id" element={<Product/>}>
                        
                        </Route>
                        <Route path="cart" element={<Cart/>}>
                        
                        </Route>
                        <Route path="*" element={<Nopage/>}>
                        
                        </Route>
                        <Route path="checkout" element={<Checkout/>}>
                        
                        </Route>
                    </Route>
                </Routes>
                <ConnectForm></ConnectForm>
            </MyContext.Provider>
    )
}