import "./Home.css";

function Home() {
  return (
    <main className="home">
      
      <div className="banner">
        <h1>Bem-vindo ao Meu Site</h1>
      </div>

      <section className="cards">
        {[1,2,3,4,5,6].map((item) => (
          <div className="card" key={item}>
            <h3>Título {item}</h3>
            <p>
              Texto descritivo do card. Aqui vai uma breve descrição.
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}

export default Home;