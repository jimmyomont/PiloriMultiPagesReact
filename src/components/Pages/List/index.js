import './style.scss';

import Cards from '../../Cards';
function List() {
  return (
    <main class="content">
    <h1 class="content-title">À vos tomates</h1>
    <section class="segment">
      <h2 class="segment-title">Toutes les tomates</h2>
      <Cards />
      <Cards />
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

export default List;
