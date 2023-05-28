import './style.scss';
import { Outlet, Link } from 'react-router-dom';
function Soumission() {
  return (
    <>
    <main class="content">
    <h1 class="content-title">Validation</h1>
    <section class="segment">
      <p>L'équipe Pilori vous remercie de votre contribution</p>
      <div class="segment-actions">
        <Link class="btn btn--outline" to="/List">Envoyer d'autres tomates</Link>
        <Link class="btn" to="/">Retour à l'accueil</Link>
      </div>
    </section>
  </main>
  <Outlet />
    </>
  );
}

export default Soumission;
