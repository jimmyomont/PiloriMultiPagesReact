import './style.scss';
import { Outlet, Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <main class="content">
    <h1 class="content-title">Connexion</h1>
    <section class="segment">
      <h2 class="segment-title">
        Mes identifiants
      </h2>
      <form class="form">
        <label class="form-field">
          Email
          <input type="email" placeholder="Votre email" class="form-input"/>
        </label>
        <label class="form-field">
          Mot de passe
          <input type="password" placeholder="Mot de passe" class="form-input"/>
        </label>
        <div class="segment-actions">
          <Link to="/Account" class="btn"> Se connecter</Link>
        </div>
        <div class="segment-actions">
          <Link href="/Register">Je n'ai pas de compte</Link>
          <Link href="/Register">Mot de passe oublié</Link>
        </div>
      </form>
    </section>
  </main>
  <Outlet />
  </>
  );
}

export default Login;
