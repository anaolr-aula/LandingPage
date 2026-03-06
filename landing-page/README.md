# 🚀 Landing Page em React

Uma **Landing Page moderna desenvolvida com React**, utilizando arquitetura baseada em componentes para criar uma interface organizada, reutilizável e fácil de manter.

O projeto demonstra conceitos fundamentais de desenvolvimento front-end como **componentização, organização de layout e renderização dinâmica de elementos**.

---

# 📸 Preview

Interface composta por:

- Menu de navegação
- Banner principal
- Seção de cards informativos
- Rodapé com redes sociais

---

# 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

- Estruturação de projetos em React
- Criação de componentes reutilizáveis
- Organização de layouts responsivos
- Separação de responsabilidades entre componentes

---

# 🛠 Tecnologias Utilizadas

- React
- JavaScript
- HTML5
- CSS3

---

# 🧩 Componentes do Projeto

## Menu

Responsável pela **navegação principal do site**.

Contém:

- Logo do site
- Links de navegação
- Estrutura de cabeçalho

Exemplo de código:

```bash
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
