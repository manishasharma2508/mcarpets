import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center text-sm">
            Made with <FaHeart className="text-red-500 mx-1" /> by Manisha Sharma
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 