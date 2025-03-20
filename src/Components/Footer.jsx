import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Contactez-nous</h3>
            <p class="text-gray-400">Addresse: 4512 de Yaounde, Cameroun</p>
            <p class="text-gray-400">Téléphone: +237 655 068 532</p>
            <p class="text-gray-400">Email : robertofokou4@gmail.com</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Lien utils</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  A propos
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                class="bg-gray-800  rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                class="bg-gray-800  rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                class="bg-gray-800  rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div class="text-center text-gray-400 mt-8">
          &copy; la minute de code - 2025 - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

export default Footer;
