import './style.scss';
import { Outlet,Link } from 'react-router-dom';
function Recherche() {
  return (
    <>
  <main class="content">
    <h1 class="content-title">Erreur</h1>
    <section class="segment">
      <p>Une erreur s'est produite</p>
      <div class="segment-actions">
        <Link class="btn btn--outline" to="/List">Envoyer des tomates</Link>
        <Link class="btn" to="/Denoncer">Commencer la dénonciation</Link>
      </div>
    </section>
  </main>
  <Outlet />
    </>

  );
}

export default Recherche;
