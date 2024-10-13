import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FooterLinks = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">Developer</h2>
      <nav className="list-none mb-10">
        <li>
          <a
            href="https://www.linkedin.com/in/jenil-parmar-970b4027b/"
            className="text-white hover:text-gray-800 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_._jenil.p_._/"
            className="text-white hover:text-gray-800 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
        </li>
        <li>
          <a
            href="mailto:jenilparmar94091@gmail.com"
            className="text-white hover:text-gray-800 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/8849577787"
            className="text-white hover:text-gray-800 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </li>
      </nav>
    </div>
  );
};

export default FooterLinks;
