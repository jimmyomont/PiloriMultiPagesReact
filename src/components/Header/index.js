import './style.scss';
import FeatherIcon from 'feather-icons-react';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header class="header">


        <Link to="/"class="logo" title="Retour à l'accueil"><img class="logo-img" src="assets/img/logo.svg" alt="PilOri"/></Link>



    <nav class="menu">
      <Link to="/List"><a class="menu-link">Toutes les tomates</a></Link>
      <Link to="/Denoncer"><a class="menu-link">Dénoncer</a></Link>
    </nav>
    <div class="header-tools">
      <form class="search">
        <input class="search-input" type="search" placeholder="Rechercher..."/>
          <Link to="/Recherche" class="search-submit">
          <FeatherIcon icon="search"/>
        </Link>
      </form>
      <div class="account">
        <Link id="menuToggler" class="account-link account-link--mobile" to="#"><FeatherIcon icon="menu"/></Link>
        <Link id="searchToggler" class="account-link account-link--mobile" to="#"><FeatherIcon icon="search"/></Link>
        <Link to="/Account"><a class="account-link"><FeatherIcon icon="user"/></a></Link>
        <Link  class="account-link" to="/Register"><FeatherIcon icon="log-out"/></Link>
      </div>
    </div>
  </header>
  <Outlet />
  </>
  );
}

export default Header;
