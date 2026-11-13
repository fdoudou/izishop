import { useEffect, useReducer,useRef,useState,useContext, use } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./Contextor";
// import { useFetch } from "./hooks";

export default function ConnectForm(props) {
    const { hideModal,showModal,verifyForm } = useContext(MyContext);
    // const { isLoading, data, error } = useFetch("https://url");
    const [connectType,setConnectType] = useState("login");
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);
    function toggleConnectType(type) {
      connectType == "signup"? setConnectType("login"):setConnectType("signup");
    }
    function signup(params) {
      
    }
  return (
    <dialog id="connect-form" className="border-light">
        <h3 className="fmld-center fmld-xxlarge text-gray-dark"> {connectType == "signup"? "Inscription":"Connexion"} <span className="text-primary">client</span></h3>
        <form onSubmit={()=>{verifyForm()} } id="form" action="" method="post" className="needs-validation fmld-w-100 fmld-centered">
          {connectType == "signup"&&
          <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
            <label htmlFor="username" className="form-label fmld-medium fmld-pdg-top-bottom">
              Prénom et nom
            </label>
            <div className="fmld-width-90">
              <input
                ref={usernameRef}
                type="text"
                name="username"
                className="fmld-width-100 fmld-pdg-8 fmld-mrg-right- fmld-rounded fmld-mrg-left- border-light"
                id="username"
                placeholder="Entrez vos prénom et nom"
                required/>
              <div className="invalid-feedback fmld-small"></div>
            </div>
          </div>}

          <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
            <label htmlFor="email" className="form-label fmld-medium fmld-pdg-top-bottom">
              Adresse email
            </label>
            <div className="fmld-width-90">
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="fmld-width-100 fmld-pdg-8 fmld-mrg-right- fmld-rounded fmld-mrg-left- border-light"
                id="email"
                placeholder="Entrez votre adresse email"
                required/>
              <div className="invalid-feedback fmld-small"></div>
            </div>
          </div>
          <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
            <label htmlFor="password" className="form-label fmld-medium fmld-pdg-top-bottom">
              Mot de passe
            </label>
            <div className="fmld-width-90">
              <input
                ref={passwordRef}
                minLength={6}
                type="password"
                name="password"
                className="fmld-width-100 fmld-pdg-8 fmld-mrg-right- fmld-rounded fmld-mrg-left- border-light"
                id="password"
                placeholder="Entrez votre mot de passe"
                required/>
              <div className="invalid-feedback fmld-small"></div>
            </div>
          </div>
          {connectType == "signup"&&
          <div className="fmld-pdg-bottom-8 fmld-width-100 form-control">
            <label htmlFor="tel" className="form-label fmld-medium fmld-pdg-top-bottom">
              Numéro de téléphone
            </label>
            <div className="fmld-width-90">
              <input
                ref={phoneRef}
                minLength={9}
                maxLength={9}
                pattern="^\d+$"
                type="tel"
                name="tel"
                inputMode="numeric"
                className="fmld-width-100 fmld-pdg-8 fmld-mrg-right- fmld-rounded fmld-mrg-left- border-light"
                id="tel"
                placeholder="Entrez votre numéro de téléphone"
                required/>
              <div className="invalid-feedback fmld-small"></div>
            </div>
          </div>}
          <div className="fmld-width-100 fmld-pdg-top-8">
            <button type="submit" onClick={()=>{signup}} className="btn fmld-round fmld-pdg-8 fmld-width-100 fmld-primary text-white fmld-medium fmld-zoom-out">
              {connectType == "signup"? "S'inscrire":"Se connecter"}
            </button>
          </div>
          <div className="fmld-pdg-top-8">
            <p>
              {connectType == "signup"? "Vous avez déjà un compte?":"Vous n'avez pas un compte?"}
              <button type="submit" className="transparent text-primary fmld-medium" formAction={connectType == "signup"? "/signup":"/login"} onClick={()=>{toggleConnectType("signup")}}>{connectType == "signup"? "Connectez-vous":"Inscrivez-vous"}</button>
              {/* formMethod="dialog" */}
            </p>
            
            <button type="button" className="fmld-pdg fmld-zoom-out text-primary transparent fmld-small" onClick={() => { hideModal('connect-form'); }}>
            ← Continuer ma navigation
            </button>
          </div>
        </form>
    </dialog>
  );
}