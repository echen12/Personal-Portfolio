import { FaLinkedin, FaGithub } from 'react-icons/fa'
import logo from '../public/logo/EC.png'
import Image from 'next/image'

const NavBar = () => {
    return (
        <header className="flex justify-between h-auto w-full mt-4">
            <div className="m-2">
                <Image src={logo} width={127} height={80} alt="portfolio-logo" />
            </div>

            <nav className="flex">
                <div className="invisible flex flex-col md:visible md:flex-row md:space-x-6 md:m-auto md:mr-10">
                    <a className="hover:text-red-500" href="#projects">Projects</a>
                    <a className="hover:text-red-500" href="#experience">Experience</a>
                    <a className="hover:text-red-500" href="#blog">Blog</a>
                </div>
                <div className="flex m-auto space-x-4 mr-2 md:mr-6">

                    <a href="https://www.linkedin.com/in/edmond-chen-5b0b111a5/">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="https://github.com/echen12">
                        <FaGithub className="text-3xl" />
                    </a>

                </div>
            </nav>
        </header>
    )
}

export default NavBar;