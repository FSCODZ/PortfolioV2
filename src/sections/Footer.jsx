import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={socialImg.imgPath}
                  alt={`${socialImg.name} icon`}
                  className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} FSCODZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
