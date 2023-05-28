import './style.scss';
import FeatherIcon from 'feather-icons-react';
import { Outlet, Link } from "react-router-dom";

function Card({tag, nbTomates, img, title, descr, next, lien}) {
  return (
    <>
    <article class="card">
    <div class="card-tags">
      <span class="card-tag">
        {tag}
      </span>
      <span class="card-tag card-tag--red">
      <FeatherIcon icon="circle"/>
        {nbTomates}
      </span>
    </div>
    <img class="card-img" src={`assets/img/${img}.jpg`} alt="xxx"/>
    <div class="card-content">
      <h3 class="card-title">{title}</h3>
      <p class="card-desc">{descr}</p>
      <Link class="card-more" to={next}>Lire la suite</Link>
    </div>
    <footer class="card-actions">
      <a class="card-link" href={lien}>Consulter le site</a>
      <button class="card-btn card-btn--red"><FeatherIcon icon="circle"/></button>
      <button class="card-btn card-btn--light"><FeatherIcon icon="check"/></button>
      <button class="card-btn card-btn--dark"><FeatherIcon icon="share-2"/></button>
    </footer>
  </article>
    <Outlet />
    </>
  );
}

export default Card;
