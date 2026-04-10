import React from 'react';
import { Heart, Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Lá da Vendinha</h3>
                <p className="text-sm text-gray-400">Negócios Locais</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conectando você aos melhores negócios do seu bairro. Descubra, explore e apoie o comércio local!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/explore" className="hover:text-white transition-colors duration-200">
                  Explorar Negócios
                </a>
              </li>
              <li>
                <a href="/favorites" className="hover:text-white transition-colors duration-200">
                  Meus Favoritos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: contato@ladavendinha.com.br</li>
              <li>Telefone: (11) 99999-9999</li>
              <li>Horário: Seg-Sex, 9h-18h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Lá da Vendinha. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para a comunidade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;