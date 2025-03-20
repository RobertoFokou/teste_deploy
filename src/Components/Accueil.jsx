import React from "react";

function Accueil() {
  return (
    <>
      <section class="relative h-screen flex justify-center items-center hero-bg bg-fixed bg-center bg-cover">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative text-center p-6">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
            Découvrez le Monde avec Nous
          </h1>
          <p class="text-lg md:text-2xl mb-8 text-white">
            Voyager vers des destinations de rêves avec nos offres incroyables
          </p>
          <button class="bg-red-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
            Réserver maintenant
          </button>
        </div>
      </section>

      <section class="text-center py-">
        <h2 class="text-4xl text-red-600 uppercase font-black mb-2">
          Galerie d'inspiration
        </h2>
        <p class="text-lg text-gray-600">
          Decouvrez nos collections unique et trouvez l'inspiration pour vos
          projets
        </p>
      </section>
    </>
  );
}

export default Accueil;
