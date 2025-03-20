import React from "react";

function Galerie(props) {
  return (
    <div class="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all">
      <img src={props.image} alt="image" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">{props.titre}</h2>
        <p class="text-gray-700 mb-4">{props.description}</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {props.titleBtn}
        </button>
      </div>

      {props.price && (
        <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
          {props.price}
        </div>
      )}
    </div>
  );
}

export default Galerie;
