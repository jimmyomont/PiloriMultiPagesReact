import './style.scss';
import Card from '../Card';

function Cards() {
  return (
    <div class="card-container">
    <Card 
    tag="Moche"
    nbTomates="130"
    img= "ph1"
    title= "Doctolib test"
    descr="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, placeat!"
    next="/Detail"
    />
    <Card 
    tag="Bloquant"
    nbTomates="220"
    img= "ph2"
    title= "Fnac"
    descr="lLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum maxime explicabo!"
    />
    <Card 
    tag="Moche"
    nbTomates="235"
    img= "ph3"
    title= "Agence Nationale des Titres de Sécurité"
    descr="or sit amet conLorem ipsum dolsectetur, adipisicing elit. Quod, placeat"
    />
    <Card 
    tag="Casse tête"
    nbTomates="138"
    img= "ph4"
    title= "SNCF"
    descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum maxime explicabo!"
    />
    <Card 
    tag="Moche"
    nbTomates="431"
    img= "ph2"
    title= "Craiglist"
    descr="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, placeat!"
    />
    <Card 
    tag="Bloquant"
    nbTomates="211"
    img= "ph2"
    title= "Oclock.io"
    descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum maxime explicabo!"
    />
  </div>

  );
}

export default Cards;
