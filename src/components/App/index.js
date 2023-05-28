import './style.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../Main';
import Corps from '../Corps'
import Account from '../Pages/Account'
import Admin from '../Pages/Admin';
import Contact from '../Pages/Contact';
import Detail from '../Pages/Detail';
import List from '../Pages/List';
import Login from '../Pages/Login';
import Mentions_legales from '../Pages/Mentions_legales';
import Plan_du_site from '../Pages/Plan_du_site';
import Register from '../Pages/Register';
import Soumission from '../Pages/Soumission';
import Denoncer from '../Pages/Denoncer';
import Recherche from '../Pages/Recherche';

function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Corps />}>
        <Route index element={<Main />}/>
        <Route path="Account" element={<Account />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="List" element={<List />} />
        <Route path="Login" element={<Login />} />
        <Route path="Mentions_legales" element={<Mentions_legales />} />
        <Route path="Plan_du_site" element={<Plan_du_site />} />
        <Route path="Recherche" element={<Recherche />} />
        <Route path="Register" element={<Register />} />
        <Route path="Soumission" element={<Soumission />} />
        <Route path="Denoncer" element={<Denoncer />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
export default App;

