import './style.scss';
import { Outlet, Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';

function Footer() {
  return (
    <>
      <footer class="footer">
        <Link to="/Plan_du_site"><a class="footer-link">Plan du site</a></Link>
        <Link to="/Mentions_legales"><a class="footer-link">Mentions légales</a></Link>
        <Link to="Contact" > <a class="footer-link">Contact</a> </Link>
        <button class="footer-totop" title="Retour en haut de page"><FeatherIcon icon="arrow-up-circle"/></button>
      </footer>
      <Outlet />
    </>

  );
}

export default Footer;
