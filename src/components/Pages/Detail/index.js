import './style.scss';
import FeatherIcon from 'feather-icons-react';
import { Outlet, Link } from 'react-router-dom';
function Detail() {
  return (
    <>

    <main class="content">
    <section class="segment">
      <article class="detail">
        <header class="detail-header">
          <div class="detail-intro">
            <h1 class="detail-title">
              Nom du site au pilori
            </h1>
            <h2 class="detail-subtitle">Le nom du problème sera ici !</h2>
          </div>
          <button class="detail-share"><FeatherIcon icon="share-2"/></button>
          <span class="detail-counter"><FeatherIcon icon="circle"/> 180</span>
        </header>
        <figure class="detail-figure">
          <img src={`assets/img/ph-screen.jpg`} alt=""/>
          <figcaption class="detail-caption">Disfonctionnement de Doctolib</figcaption>
        </figure>
        <ul class="detail-list">
          <li><span class="detail-label">Reporteur</span> : Marie Dupont</li>
          <li><span class="detail-label">Type</span> : bloquant</li>
          <li><span class="detail-label">Support</span> : Ordinateur</li>
        </ul>
        <p class="detail-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid dolore nam ducimus fugiat non sunt voluptatibus ex pariatur iste expedita accusamus quisquam dicta beatae laudantium blanditiis quis tenetur recusandae molestias repellendus, alias doloribus. Quaerat, eligendi sit maiores enim beatae natus labore, sint aliquid architecto pariatur perspiciatis neque facere amet.</p>
        <footer class="detail-actions">
          <a class="btn">Voir le disfonctionnement</a>
          <button class="btn"><FeatherIcon icon="check"/> Inaccessibilité corrigée</button>
          <button class="btn btn--red"><FeatherIcon icon="circle"/> Lancer une tomate</button>
        </footer>
      </article>
      <footer class="segment-actions">

        <Link to="/List" class="btn"> Retour à la liste</Link>
      </footer>
    </section>
  </main>
  <Outlet />
  </>
  );
}

export default Detail;
