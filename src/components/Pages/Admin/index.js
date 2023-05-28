import './style.scss';

function Admin() {
  return (
    <main class="content">
    <h1 class="content-title">Administration</h1>
    <section class="segment">
      <h2 class="segment-title">
        Toutes les tomates
      </h2>
      <ul class="admin">
        <li class="admin-row">
          <span class="admin-title">
            Doctolib
          </span>
          <span class="admin-status admin-status--red">
            A publier
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
        <li class="admin-row">
          <span class="admin-title">
            SNCF
          </span>
          <span class="admin-status admin-status--orange">
            A confirmer
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
        <li class="admin-row">
          <span class="admin-title">
            Oclock.io
          </span>
          <span class="admin-status admin-status--green">
            Publié
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
        <li class="admin-row">
          <span class="admin-title">
            Toto.com
          </span>
          <span class="admin-status admin-status--blue">
            Non publié
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
        <li class="admin-row">
          <span class="admin-title">
            Tata.com
          </span>
          <span class="admin-status admin-status--blue">
            Non publié
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
        <li class="admin-row">
          <span class="admin-title">
            Titi.io
          </span>
          <span class="admin-status admin-status--blue">
            Non publié
          </span>
          <span class="admin-actions">
            <a href="#">Consulter</a> - 
            <a href="#">Editer</a>
          </span>
        </li>
      </ul>
      <footer class="segment-actions">
        <a class="segment-pagination" href="#">1</a> -
        <a class="segment-pagination" href="#">2</a> -
        <a class="segment-pagination" href="#">3</a> 
        ...
        <a class="segment-pagination" href="#">15</a>
      </footer>
    </section>
  </main>
  );
}

export default Admin;
