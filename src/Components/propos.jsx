import React from "react";

function Apropos() {
  return (
    <section class="bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div class="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1741565779514-e370b5e6de4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-4xl text-red-600 uppercase font-black mb-2">
              A propos
            </h2>
            <p class="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              dicta. Vero officia culpa doloribus odit, reiciendis explicabo
              nostrum nisi facere.
            </p>
            <p class="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              dicta. Vero officia culpa doloribus odit, reiciendis explicabo
              nostrum nisi facere.
            </p>
            <p class="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              dicta. Vero officia culpa doloribus odit, reiciendis explicabo
              nostrum nisi facere.
            </p>
            <p class="text-lg mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium vel totam aliquam inventore magni eius placeat
              necessitatibus consequatur fuga velit dolore nam assumenda hic,
              ipsum voluptas ratione repellendus quas saepe.
            </p>
            <button class="bg-red-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apropos
