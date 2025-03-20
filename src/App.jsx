import "./App.css";
import Accueil from "./Components/Accueil";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Galerie from "./Components/Galerie";
import Header from "./Components/Header";
import Apropos from "./Components/propos";

function App() {
  return (
    <>
      <Header />
      <Accueil />
      <section class="w-full max-w-[1200px] m-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Galerie
            image="https://i.pinimg.com/736x/5e/87/00/5e8700424201eb225c9a7dea4c3ec7f4.jpg"
            titre="Title 1"
            description="Description 1"
            titleBtn="Voir plus"
            price="100$"
          />

          <Galerie
            image="https://i.pinimg.com/736x/8e/ed/37/8eed378ed2bfec622836185cb7c042a9.jpg"
            titre="Title 2"
            description="Description 2"
            titleBtn="Voir plus"
            // price="200$"
          />

          <Galerie
            image="https://images.unsplash.com/photo-1739130524827-5fa364835c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            titre="Title 3"
            description="Description 3"
            titleBtn="Voir plus"
            price="300$"
          />

          <Galerie
            image="https://images.unsplash.com/photo-1735832489994-96adfc4db2dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            titre="Title 4"
            description="Description 4"
            titleBtn="Voir plus"
            price="400$"
          />

          <Galerie
            image="https://images.unsplash.com/photo-1741531472824-b3fc55e2ff9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
            titre="Title 5"
            description="Description 5"
            titleBtn="Voir plus"
            price="500$"
          />

          <Galerie
            image="https://images.unsplash.com/photo-1741526179588-c6e13e956309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            titre="Title 6"
            description="Description 6"
            titleBtn="Voir plus"
            price="600$"
          />
        </div>
      </section>
      <Apropos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
