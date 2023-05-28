import './style.scss';

function Plan_du_site() {
  return (
    <main>
        <div class="segment__plan-center">
            <ul class="segment__list-style">
            <li>Accueil</li>
                    <li>Toutes les tomates</li>
                    <li>Dénoncer</li>
                    <li>Connexion
                        <ul class="segment__list-style">
                            <li>Page Membre</li>
                            <li>Inscription</li>
                        </ul>
                    </li>
                    <li>Site Tomaté</li>
                    <li>Toutes les tomates
                        <ul class="segment__list-style">
                            <li>Site Tomaté</li>
                        </ul>
                    </li>
                    <li>Plan du site</li>
                    <li>Mentions légales</li>
                    <li>Contact</li>
                </ul>
        </div>
    </main>
  );
}

export default Plan_du_site;
