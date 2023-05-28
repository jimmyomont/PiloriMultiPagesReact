import './style.scss';
import { Outlet, Link } from "react-router-dom";
function Denoncer() {
  return (
    <>
    <main class="content">
    <h1 class="content-title">Dénoncer</h1>
    <section class="segment">
        <h2 class="segment-title">Dénoncer un site inaccessible</h2>
        <form class="form" action="/tomates/denoncer" method="post">
            <label class="form-field">
                Titre du dysfonctionnement
                <input type="text" class="form-input" name="titre"/>
            </label>
            <label class="form-field">
                Description
                <textarea class="form-input form-input--long" name="description"></textarea>
            </label>
            <label class="form-field">
                Adresse de la page web
                <input type="url" class="form-input" name="adresse"/>
            </label>
            <label class="form-field">
                Sur quel type de support
                <select class="form-input" name="appareil">
                    <option>Mobile</option>
                    <option>Ordinateur</option>
                    <option>Lecteur d'écran</option>
                </select>
            </label>
            <label class="form-field">
                Degré d'importance
                <select class="form-input" name="niveau">
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

export default Denoncer;
