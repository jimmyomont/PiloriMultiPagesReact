import './style.scss';
import { Outlet, Link } from 'react-router-dom';
function Register() {
  return (
    <>
    <main class="content">
    <h1 class="content-title">Inscription</h1>
    <section class="segment">
      <h2 class="segment-title">
        Mes informations
      </h2>
      <div class="message">
        Veuillez remplir vos informations.
      </div>
      <div class="message message--success">
        Inscription réussie.
      </div>
      <div class="message message--error">
        Champ obligatoire manquant.
      </div>
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
          Mot de passe
          <input type="password" placeholder="Mot de passe" class="form-input"/>
        </label>
        <label class="form-field">
          Confirmation du mot de passe
          <input type="password" placeholder="Répéter le mot de passe" class="form-input"/>
        </label>
        <div class="segment-actions">
          <button type="submit" class="btn">S'inscire</button>
        </div>
        <div class="segment-actions">
          <Link to="/Login">J'ai déjà un compte</Link>
        </div>
      </form>
    </section>
  </main>
  <Outlet />
    </>

  );
}

export default Register;
