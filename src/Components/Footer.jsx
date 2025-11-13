import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 text-gray-100 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaLeaf className="text-3xl text-lime-400" />
            <h2 className="text-2xl font-bold tracking-wide">AgroConnect</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering farmers and agri-enthusiasts with technology, information, and sustainable solutions for a better tomorrow.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-lime-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/news" className="hover:text-white transition">Agro News</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-lime-300">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/guide" className="hover:text-white transition">Farming Guides</a></li>
            <li><a href="/market" className="hover:text-white transition">Market Trends</a></li>
            <li><a href="/tools" className="hover:text-white transition">Smart Tools</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-lime-300">Follow Us</h3>
          <div className="flex gap-4 text-gray-200">
            <a href="#" className="hover:text-lime-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-lime-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-lime-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-lime-400 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-green-600 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="text-lime-300 font-semibold">AgroConnect</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
