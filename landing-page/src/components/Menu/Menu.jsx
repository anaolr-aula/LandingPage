import "./Menu.css";

function Menu() {
  return (
    <header className="menu">
      <div className="logo">MinhaLogo</div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;