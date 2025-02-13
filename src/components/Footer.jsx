import { FaGithub, FaLinkedin, FaYinYang } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-[#560106] text-[#d1b48c]">
          <div className="footer sm:footer-horizontal w-11/12 mx-auto items-center p-4">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a className='text-2xl' target='blank' href='https://github.com/Irenity0'><FaGithub/></a>
            <a className='text-2xl' target='blank' href='https://www.linkedin.com/in/afra-anjum-subha/'><FaLinkedin/></a>
            <a className='text-2xl' href=''><FaYinYang/></a>
          </nav>
          </div>
        </footer>
    );
};

export default Footer;