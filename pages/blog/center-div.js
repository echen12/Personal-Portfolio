import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo/EC.png';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import div from '../../public/projects/Div.png';
import Footer from '../../components/Footer';

const ConstDiv = () => {


    return (
        <div>
            <header className="flex justify-between h-auto w-full mt-4">
                <div className="ml-2">
                    <Link href="/">
                        <Image src={logo} width={127} height={80} alt="portfolio logo" />
                    </Link>
                </div>
                <nav className="flex">
                    <div className="invisible flex flex-col md:visible md:flex-row md:space-x-6 md:m-auto md:mr-10">
                        <Link href="/#projects">
                            <a className="hover:text-red-500">Projects</a>
                        </Link>

                        <Link href="/#experience">
                            <a className="hover:text-red-500">Experience</a>
                        </Link>
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

            <div>
                <div className="flex justify-center m-4">
                    <Image src={div} alt="blog thumbnail" />
                </div>

                <div>
                    <div className="text-center text-xl font-bold">
                        <h1>Let's Center A Div!</h1>
                    </div>

                    <div className="flex justify-center">

                        <div className="md:w-9/12 m-2">

                            <p>Centering a div has become a meme among developers because something so seemingly simple can quickly turn into a frustrating task if you aren&apos;t familiar with how CSS works.
                            </p>
                            <p>
                                Let&apos;s start with the template below. The goal is to center the child box inside its parent.
                            </p>

                            <br />

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>


                        </div>


                    </div>

                </div>
            </div>

           <Footer />



        </div>
    )
}

export default ConstDiv;