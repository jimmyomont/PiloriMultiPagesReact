import './style.scss';
import { Outlet, Link } from 'react-router-dom';
function Plan_du_site() {
    return (
        <>
            <main>
                <div class="segment-center">
                    <ul>
                        <Link to="/"><li>Accueil</li></Link>
                        <Link to="/Account"><li>Page Membre</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                        <Link to="/Denoncer"><li>Dénoncer</li></Link>
                        <Link to="/List"><li>Toutes les tomates</li></Link>
                        <Link to="/Login"><li>Connexion</li></Link>
                        <Link to="/Mentions_legales"><li>Mentions légales</li></Link>
                        <Link to="/Register"><li>Inscription</li></Link>
                    </ul>
                </div>
            </main>
            <Outlet />
        </>
    );
}

export default Plan_du_site;
