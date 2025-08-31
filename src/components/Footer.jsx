import { useState } from "react";
import { footer } from "../data/footer";
import logo from "/src/assets/images/logo.svg";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);
  return (
    <>
      <footer className='footer text-center px-5 md:text-left md:grid md:grid-cols-2 lg:py-10'>
        <div>
          <img src={logo} alt="" className='block mx-auto pt-10 md:mx-0' />
        </div>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
            {footerLinks.map(({ id, title, links }) => (
              <ul key={id}>
                <h4 className='mt-10 mb-5 text-lg'>{title}</h4>

                {links.map((link) => (
                  <li key={link} className='py-3'>{link}</li>
                ))}
              </ul>
            ))}
        </div>
      </footer>
    </>
  );
};
export default Footer;
