import './style.scss';
import Cards from '../Cards'
import { Outlet, Link } from "react-router-dom";
import FeatherIcon from 'Feather-icons-react';

function Main() {

  return (
    <>
    <main class="content">
    <h1 class="content-title">PilOri</h1>
    <section class="segment">
      <h2 class="segment-title">À vos tomates</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eos eum nisi similique omnis amet ex, provident, aperiam incidunt, commodi dolorum ad veritatis beatae fuga dolorem perspiciatis totam quos. Voluptatum eveniet laborum alias, quaerat accusamus adipisci beatae, quidem, quis voluptatibus quam possimus? Inventore quasi totam, dolore assumenda voluptatum accusamus eos.</p>
      <div class="segment-actions">
        <Link class="btn btn--outline" to="/List">Envoyer des tomates</Link>
        <Link class="btn" to="/Denoncer">Commencer la dénonciation</Link>
      </div>
    </section>
    <section class="segment">
      <h2 class="segment-title">Les pires !</h2>
      <div class="segment-tools">
        <button class="btn btn--view-mode" data-mode="list" title="Affichage en liste"><FeatherIcon icon="list"/></button>
        <button class="btn btn--view-mode btn--hidden" data-mode="grid" title="Affichage en mosaïque"><FeatherIcon icon="grid"/></button>
      </div>
      <Cards />
      <article class="segment-actions">
        <Link class="btn" to="/List">Tout voir</Link>
      </article>
    </section>
    <section class="segment">
      <h2 class="segment-title">Dénoncer un site inaccessible</h2>
      <form class="form">
        <label class="form-field">
          Titre du dysfonctionnement
          <input type="text" class="form-input"/>
        </label>
        <label class="form-field">
          Description
          <textarea class="form-input form-input--long"></textarea>
        </label>
        <label class="form-field">
          Adresse de la page web
          <input type="url" class="form-input"/>
        </label>
        <label class="form-field">
          Sur quel type de support
          <select class="form-input">
            <option>Mobile</option>
            <option>Ordinateur</option>
            <option>Lecteur d'écran</option>
          </select>
        </label>
        <label class="form-field">
          Degré d'importance
          <select class="form-input">
            <option>Bloquant</option>
            <option>Gênant</option>
            <option>Casse tête</option>
          </select>
        </label>
        <div class="segment-actions">
          <Link to="/Soumission"  class="btn">
          Soumette le dysfonctionnement à l'équipe de modération</Link>
        </div>
      </form>
    </section>
  </main>
        <Outlet />
        </>
  );
}

export default Main;
