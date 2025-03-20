import React from "react";

function Contact() {
  return (
    <section class="px-4 py-12 contact-bg bg-fixed bg-center bg-cover">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-opacity-25">
        <h2 class="text-4xl text-red-600 uppercase font-black mb-2 text-center">
          Contactez-nous
        </h2>
        <p class="text-lg text-gray-600 text-center mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, optio?
        </p>
        <form action="#" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            ></textarea>
          </div>
          <div class="text-center">
            <button class="w-full md:w-auto inline-flex justify-center py-3 px-6 border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
