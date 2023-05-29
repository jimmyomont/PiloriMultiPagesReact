import './style.scss';
import { Outlet, Link } from "react-router-dom";

function Account() {
  return (
    <>
    <main class="content">
    <h1 class="content-title">Mon compte</h1>
    <section class="segment">
      <h2 class="segment-title">
        Pseudo du membre
      </h2>
      <p class="emphasis">Membre depuis le 01/23/4567</p>
      <div class="richtext">
        <h3>
          Site reportés
        </h3>
        <ul>
          <li><a href="#">Doctolib</a></li>
          <li><a href="#">Fnac</a></li>
        </ul>
        <h3>
          Tomates lancées
        </h3>
        <ul>
          <li><a href="#">Doctolib</a></li>
          <li><a href="#">Fnac</a></li>
          <li><a href="#">Sncf</a></li>
        </ul>
      </div>
    </section>
    <section class="segment">
      <h2 class="segment-title">
        Editer mon profil
      </h2>
      <form class="form">
        <label class="form-field">
          Email
          <input type="email" placeholder="Votre email" class="form-input"/>
        </label>
        <label class="form-field">
          Pseudonyme
          <input type="text" placeholder="Votre pseudo" class="form-input"/>
        </label>
        <label class="form-field">
          Mot de passe actuel
          <input type="password" placeholder="Mot de passe" class="form-input"/>
        </label>
        <label class="form-field">
          Nouveau mot de passe
          <input type="password" placeholder="Mot de passe" class="form-input"/>
        </label>
        <label class="form-field">
          Confirmation du mot de passe
          <input type="password" placeholder="Répéter le mot de passe" class="form-input"/>
        </label>
        <div class="segment-actions">
          <Link to='/Account' type="submit" class="btn">Mettre à jour</Link>
        </div>
        <div class="segment-actions">
        <Link to="/Admin" class="btn">Compte Admin</Link>
          
        </div>
      </form>
    </section>
  </main>
  <Outlet />
    </>
  );
}

export default Account;
